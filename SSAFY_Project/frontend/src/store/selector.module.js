import http from "@/util/http-common"

export const selector = {
  state: {
    guguns: [],
    dongs: [],
    type: "",
    item: [],
    dealItem: [],
    imageSrc: "",
    isClick: false,
  },
  mutations: {
    GET_GUGUN_LIST(state, guguns) {
      state.guguns = [];
      guguns.forEach(e => {
        state.guguns.push(e.sigunguname)
      });
    },
    GET_DONG_LIST(state, dongs) {
      state.dongs = [];
      dongs.forEach(e => {
        state.dongs.push(e.eupmyeondongname);
      })
    },

    SEND_APT_DEAL_LIST(state, item){
      state.dealItem = [];
      state.item = item;
      item.forEach(i => {
        state.dealItem.push({dealamount: `${i.dealamount}만원`, 
          dealyear: `${i.dealyear}년 ${i.dealmonth}월`, 
          floor: `${i.floor}층`},)
      });
      state.type = "aptdeal"
      state.isClick = true;
      try {
        require('../assets/apartImage/'+ `${item[0].dong} ${item[0].jibun}.jpg`);
        state.imageSrc = `${item[0].dong} ${item[0].jibun}.jpg`;
      } catch(e) {
        state.imageSrc = 'happyhouse.jpg';
      }
      console.log(state.imageSrc);
    },
    SEND_APT_RENT_LIST(state, item){
      state.dealItem = [];
      state.item = item;
      item.forEach(i => {
        state.dealItem.push({deposit: `${i.deposit}만원`, 
                              rent: `${i.rent}만원`,
                              dealyear: `${i.dealyear}년 ${i.dealmonth}월`, 
                              floor: `${i.floor}층`},)
      });
      state.type = "aptrent"
      state.isClick = true;
      try {
        require('../assets/apartImage/'+ `${item[0].dong} ${item[0].jibun}.jpg`);
        state.imageSrc = `${item[0].dong} ${item[0].jibun}.jpg`;
      } catch(e) {
        state.imageSrc = 'happyhouse.jpg';
      }
      console.log(state.imageSrc);

    },
    SEND_MUL_GEN_DEAL_LIST(state, item){
      state.dealItem = [];
      state.item = item;
      item.forEach(i => {
        state.dealItem.push({dealamount: `${i.dealamount}만원`, 
          dealyear: `${i.dealyear}년 ${i.dealmonth}월`, 
          floor: `${i.floor}층`,
          housearea: `${i.housearea}m²`},)
      });
      state.type = "mulgendeal"
      state.isClick = true;
      try {
        require('../assets/multigenerationimage/'+ `${item[0].dong} ${item[0].jibun}.jpg`);
        state.imageSrc = `${item[0].dong} ${item[0].jibun}.jpg`;
      } catch(e) {
        state.imageSrc = 'happyhouse.jpg';
      }
      console.log(state.imageSrc);

    },
    SEND_MUL_GEN_RENT_LIST(state, item){
      state.dealItem = [];
      state.item = item;
      item.forEach(i => {
        state.dealItem.push({deposit: `${i.deposit}만원`, 
          rent: `${i.rent}만원`, 
          dealyear: `${i.dealyear}년 ${i.dealmonth}월`, 
          floor: `${i.floor}층`,
          area: `${i.area}m²`},)
      });
      console.log(state.dealItem);
      state.type = "mulgenrent"
      state.isClick = true;
      try {
        require('../assets/multigenerationimage/'+ `${item[0].dong} ${item[0].jibun}.jpg`);
        state.imageSrc = `${item[0].dong} ${item[0].jibun}.jpg`;
      } catch(e) {
        state.imageSrc = 'happyhouse.jpg';
      }
      // console.log(item[0]);
      console.log(state.imageSrc);
    },
    SEND_HOSPITAL_LIST(state, item) {
      state.item = item;
      state.type = "hospital";
      state.isClick = true;
      state.imageSrc = `${item.name}.jpg`;
    },
    SEND_CLINIC_LIST(state, item) {
      state.item = item;
      state.type = "clinic";
      state.isClick = true;
      state.imageSrc = `${item.name}.jpg`;
    }
  },
  actions: {
    getGugunList({commit}, sido) {
      http.get(`/sigungu/${sido}`).then(({data}) => {
        commit('GET_GUGUN_LIST',data);
      }).catch(() => {
        alert("getGugunList func error");
      }); 
    },
    getDongList({commit}, sidogugun) {
      console.log(sidogugun);
      http.get(`/sigungu/${sidogugun}`).then(({data}) => {
        commit('GET_DONG_LIST', data);
      }).catch(() => {
        alert("getDongList func error");
      });
    },
    sendAptDealList({commit}, address) {
      http.get(`/apartdeal/${address}`).then(({data}) => {
        commit('SEND_APT_DEAL_LIST', data);
      }).catch(() => {
        alert("sendAptDealList func error");
      })
    },
    sendAptRentList({commit}, address) {
      http.get(`/apartrent/${address}`).then(({data}) => {
        commit('SEND_APT_RENT_LIST', data);
      }).catch(() => {
        alert("sendAptRentList func error");
      })
    },
    sendMulGenDealList({commit}, address) {
      http.get(`/mulgendeal/${address}`).then(({data}) => {
        commit('SEND_MUL_GEN_DEAL_LIST', data);
      }).catch(() => {
        alert("sendMulGenDealList func error");
      })
    },
    sendMulGenRentList({commit}, address) {
      http.get(`/mulgenrent/${address}`).then(({data}) => {
        commit('SEND_MUL_GEN_RENT_LIST', data);
      }).catch(() => {
        alert("sendMulGenRentList func error");
      })
    },
    sendHospitalList({commit}, item) {
      commit('SEND_HOSPITAL_LIST', item);
    },
    sendClinicList({commit}, item) {
      commit('SEND_CLINIC_LIST', item);
    }
  },
}