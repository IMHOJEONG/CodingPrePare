import axios from "axios";

export const notice = {
  namespaced: true,
  state: {
    isList: true,
    isDetail: false,
    isWrite: false,
    isModify: false,
    notices: [],
    notice: Object,
  },
  getters: {
      getList : state => {
          return state.notices;
      }
  },
  mutations: {
    GET_NOTICE_LIST(state, notices) {
        console.log('--------------', state.notices, notices)
        state.notices = notices;
      console.log(state.notices);
    },
    CHANGE_TO_WRITE(state) {
      state.isWrite = true;
      state.isList = false;
    },
    CHANGE_TO_DETAIL(state) {
      state.isList = false;
      state.isDetail = true;
    },
    CHANGE_TO_LIST(state) {
      state.isList = true;
      state.isDetail = false;
      state.isWrite = false;
      state.isModify = false;
    },
    CHANGE_TO_MODIFY(state) {
      state.isList = false;
      state.isDetail = false;
      state.isWrite = false;
      state.isModify = true;
    },
    SELECT_NOTICE(state, notice) {
        state.notice = notice;
        console.log(notice);
        console.log(state.notice);
    },
    DELETE_NOTICE(state) {
        state.notices = state.notices.filter((item) => {
            return item.no != state.notice.no;
        })
        state.notice = '';
        console.log(state.notice);
        console.log(state.notices);
    },
    ADD_NOTICE_LIST(state,notice) {
        state.notices.push(notice);
    },
    
  },
  actions: {
    getNoticeList(context) {
      axios
        .get("http://localhost:8081/notice")
        .then(({data}) => {
          context.commit("GET_NOTICE_LIST", data.notices);
          console.log(data);
        })
        .catch(() => {
          alert("error");
        });
    },
    selectNotice({commit},notice) {
        commit('SELECT_NOTICE',notice);
    },
    deleteNotice(context,notice) {
        axios.delete("http://localhost:8081/notice/"+notice.no)
        .then(() => {
            context.commit('DELETE_NOTICE');
            context.commit('CHANGE_TO_LIST');
        }).catch(() => {
            alert("삭제 실패");
        })
    },
    addNotice(context,notice) {
        axios.post("http://localhost:8081/notice",notice).then(() => {
            console.log(notice);
            context.commit('ADD_NOTICE_LIST',notice);
            context.commit('CHANGE_TO_LIST');
        }).catch(() => {
            alert("등록 실패");
        })
    },
    modifyNotice(context,notice) {
        axios.put("http://localhost:8081/notice",notice).then(() => {
            console.log(notice);
            //context.commit('MODIFY_NOTICE_LIST',notice);
            //context.commit('CHANGE_TO_LIST');
            //this.dispatch('getNoticeList');
            context.commit('CHANGE_TO_LIST');
        }).catch(() => {
            alert("수정 실패");
        })
    }
  },
};
