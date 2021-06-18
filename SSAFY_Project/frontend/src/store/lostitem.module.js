import axios from 'axios';
// import createPersistedState from 'vuex-persistedstate';


export const lostitem = {
    namespaced: true,
  state: {
    lostitems: [],
    lostitem: Object,
    page: 15,
  },
  mutations: {
    GET_LOSTITEM_LIST(state, lostitems) {
      // console.log(state, apts);
      state.lostitems = lostitems;
      console.log(state.lostitems);
    },
    // GET_PAGE(state) {
    //   return state.page;
    // }
  },
  actions: {
    getLostItemList({ commit }, item) {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      const SERVICE_KEY = '1TCgezF68xvc5sBfSfqL0gZeu4AxaXF9rbgB3abTMiZpG0l7pQglGfrO%2BaqG9nHWPBUosrzCCWaCJQfOMloV8w%3D%3D';
      // const SERVICE_KEY =
      //   '9Xo0vlglWcOBGUDxH8PPbuKnlBwbWU6aO7%2Bk3FV4baF9GXok1yxIEF%2BIwr2%2B%2F%2F4oVLT8bekKU%2Bk9ztkJO0wsBw%3D%3D';

      const SERVICE_URL = 'http://apis.data.go.kr/1320000/LosfundInfoInqireService/getLosfundInfoAccToLc';

      // console.log(this.page);

      const params = {
        PRDT_NM: item.itemName,
        ADDR: item.roadAddress,
        pageNo: 1,
        numOfRows: 100000,
        serviceKey: decodeURIComponent(SERVICE_KEY),
      };

      // npm install --save axios
      axios
        .get(SERVICE_URL, {
          params,
        })
        .then((response) => {
          // console.log(response.data.response.body.items.item);
          console.log('받아오기 성공');
          console.log(response.data.response.body.items.item);
          if(typeof response.data.response.body.items.item == "undefined") { 
            alert('데이터가 없습니다!');
            commit('GET_LOSTITEM_LIST', []);
          }
          else commit('GET_LOSTITEM_LIST', response.data.response.body.items.item);
          // commit('GET_LOSTITEM_LIST', response.data.response.body.items.item);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  modules: {},
  // plugins: [createPersistedState()],
};
