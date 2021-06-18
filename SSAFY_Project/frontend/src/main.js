import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VeeValidate from 'vee-validate';
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoBackground from 'vue-responsive-video-background-player';
import { Plugin } from 'vue-responsive-video-background-player'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('video-background', VideoBackground);
Vue.use(Plugin);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
