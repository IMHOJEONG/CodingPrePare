import axios from 'axios';
// import createPersistedState from 'vuex-persistedstate';


export const capital = {
    namespaced: true,
    state: {
    capitals: [],
    options: [],
    capital: Object,
    page: 15,
  },
  mutations: {
    GET_CAPITAL_LIST(state, capitals) {
      // console.log(state, apts);
      state.capitals = capitals;
      console.log(state.capitals);
    },
    GET_OPTION_LIST(state, options) {
      // console.log(state, apts);
      state.options = options;
      console.log(state.options);
    },
    // GET_PAGE(state) {
    //   return state.page;
    // }
  },
  actions: {
    getCapitalList({ commit }, item) {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      const SERVICE_KEY = '7ef7abc2d1b1a5e8a3774f0954fc7b42';
      // const SERVICE_KEY =
      //   '9Xo0vlglWcOBGUDxH8PPbuKnlBwbWU6aO7%2Bk3FV4baF9GXok1yxIEF%2BIwr2%2B%2F%2F4oVLT8bekKU%2Bk9ztkJO0wsBw%3D%3D';

      const SERVICE_URL = 'http://finlife.fss.or.kr/finlifeapi/rentHouseLoanProductsSearch.json';

      // console.log(this.page);

      const params = {
        financeCd: '',
        topFinGrpNo: item.sortofcapital,
        pageNo: 1,
        searchCnt: 100000,
        auth: decodeURIComponent(SERVICE_KEY),
      };

      // npm install --save axios
      axios
        .get(SERVICE_URL, {
          params,
        })
        .then((response) => {
          // console.log(response.data.response.body.items.item);
          console.log('받아오기 성공');
          //    console.log(response.data);
          console.log(response.data);
          console.log(response.data.result.baseList);
            console.log(response.data.result.optionList);
        //    const obj = JSON.parse(response.data);
        //    console.log(obj.baseList);
        //   if(typeof response.data.result.baseList == "undefined") { 
        //     alert('검색결과가 없습니다!');
        //     commit('GET_CAPITAL_LIST', []);
        //   }
        commit('GET_OPTION_LIST', response.data.result.optionList);
        
              if(item.itemName=='') {
                  commit('GET_CAPITAL_LIST', response.data.result.baseList);
                } else{
                    let newcapitals=[];
                    for(const capital of response.data.result.baseList) {
                        if (capital.kor_co_nm.includes(item.itemName)) {
                            newcapitals.push(capital);
                        }
                    }
                    commit('GET_CAPITAL_LIST', newcapitals);
              }
          
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  modules: {},
  // plugins: [createPersistedState()],
};
