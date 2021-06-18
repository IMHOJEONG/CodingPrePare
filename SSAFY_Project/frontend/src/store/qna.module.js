import axios from "axios";

export const qna = {
  namespaced: true,
  state: {
    isList: true,
    isDetail: false,
    isWrite: false,
    isModify: false,
    isAnswer: false,
    qnas: [],
    qna: Object,
  },
  getters: {
      getList : state => {
          return state.qnas;
      }
  },
  mutations: {
    GET_QNA_LIST(state, qnas) {
        console.log('--------------', state.qnas, qnas)
        state.qnas = qnas;
      console.log(state.qnas);
    },
    CHANGE_TO_WRITE(state) {
      state.isWrite = true;
      state.isList = false;
    },
    CHANGE_TO_DETAIL(state) {
      state.isList = false;
      state.isDetail = true;
      state.isAnswer = false;
      state.isModify = false;
    },
    CHANGE_TO_LIST(state) {
      state.isList = true;
      state.isDetail = false;
      state.isWrite = false;
      state.isModify = false;
      state.isAnswer = false;
    },
    CHANGE_TO_MODIFY(state) {
      state.isList = false;
      state.isDetail = false;
      state.isWrite = false;
      state.isModify = true;
    },
    CHANGE_TO_ANSWER(state) {
      state.isList = false;
      state.isDetail = false;
      state.isWrite = false;
      state.isModify = false;
      state.isAnswer = true;
    },
    SELECT_QNA(state, qna) {
        state.qna = qna;
        console.log(qna);
        console.log(state.qna);
    },
    DELETE_QNA(state) {
        state.qnas = state.qnas.filter((item) => {
            return item.no != state.qna.no;
        })
        state.qna = '';
        console.log(state.qna);
        console.log(state.qnas);
    },
    ADD_QNA_LIST(state,qna) {
        state.qnas.push(qna);
    },
    
  },
  actions: {
    getQnaList(context) {
      axios
        .get("http://localhost:8081/qna")
        .then(({data}) => {
          context.commit("GET_QNA_LIST", data.qnas);
          console.log(data);
        })
        .catch(() => {
          alert("error");
        });
    },
    selectQna({commit},qna) {
        commit('SELECT_QNA',qna);
    },
    deleteQna(context,qna) {
        axios.delete("http://localhost:8081/qna/"+qna.no)
        .then(() => {
            context.commit('DELETE_QNA');
            context.commit('CHANGE_TO_LIST');
        }).catch(() => {
            alert("삭제 실패");
        })
    },
    addQna(context,qna) {
        axios.post("http://localhost:8081/qna",qna).then(() => {
            console.log(qna);
            context.commit('ADD_QNA_LIST',qna);
            context.commit('CHANGE_TO_LIST');
        }).catch(() => {
            alert("등록 실패");
        })
    },
    modifyQna(context,qna) {
        axios.put("http://localhost:8081/qna",qna).then(() => {
            console.log(qna);
            //context.commit('MODIFY_NOTICE_LIST',notice);
            //context.commit('CHANGE_TO_LIST');
            //this.dispatch('getNoticeList');
            if(qna.answer == null) context.commit('CHANGE_TO_LIST');

            else {
                context.commit('SELECT_QNA', qna);
                context.commit('CHANGE_TO_DETAIL'); 
            } 
        }).catch(() => {
            alert("수정 실패");
        })
    }
  },
};
