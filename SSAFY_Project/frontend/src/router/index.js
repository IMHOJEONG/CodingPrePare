import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue';
import Auth from '../views/Auth.vue';
import Register from '../views/Register.vue';
import NewsPage from '../views/news/NewsPage.vue';
import AptDeal from '../views/aptdeal/AptDeal.vue';
import Notice from '../views/Notice.vue';
import Qna from '../views/Qna.vue';
import LostItem from '../views/LostItem.vue';
import Capital from '../views/Capital.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: ["/home"],
    name: "Home",
    component: Home,
  },

  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/Profile.vue')
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   // lazy-loaded
  //   component: () => import('../views/BoardAdmin.vue')
  // },
  // {
  //   path: '/mod',
  //   name: 'moderator',
  //   // lazy-loaded
  //   component: () => import('../views/BoardModerator.vue')
  // },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: () => import('../views/BoardUser.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path: "/notice",
    name: "notice",
    component: Notice,
  },
  {
    path: "/lostitem",
    name: "lostitem",
    component: LostItem,
  },
  {
    path: "/qna",
    name: "qna",
    component: Qna,
  },
  {
    path: '/aptdeal',
    name: 'aptdeal',
    component: AptDeal
  },
  {
    path: '/capital',
    name: 'capital',
    component: Capital
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/news'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // console.log(from);
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router;
