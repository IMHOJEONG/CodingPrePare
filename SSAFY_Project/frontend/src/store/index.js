import Vue from "vue";
import Vuex from "vuex";

import { auth } from './auth.module';
import { notice } from "./notice.module";
import { lostitem } from "./lostitem.module";
import { qna } from "./qna.module";
import { selector } from './selector.module';
import { capital } from './capital.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    footer: true
  },
  mutations: {
    CHANGE_STATE(state) {
      state.footer = !state.footer;
    }
  },
  actions: {},
  modules: {
    auth,
    selector,
    notice,
    lostitem,
    qna,
    capital,
  },
});
