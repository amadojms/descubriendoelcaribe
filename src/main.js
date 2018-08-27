// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false
/**
 *
 if (!to.matched.length) {
   next('/notFound');
 }
 */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // console.log(currentUser,requiresAuth,to,from);
  // console.log(from);
  // console.log(requiresAuth);
  if (requiresAuth && currentUser !== null) {
    console.log("entro aqui 2", currentUser, requiresAuth);
      // next('');
      next();
  } else if(requiresAuth == false && currentUser == null && to.path == '/admin'){
      console.log("1", from)
      // console.log("entro aqui 555", to.matched.length)
      // next(from.path);
      next('/login');
  }else{
    console.log("else vue route", to.path);
    next();
  }
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDGxeLHv3_jcfKxUh5PQPL8ESZm282v8nY",
  authDomain: "descubriendoelcaribe-fb135.firebaseapp.com",
  databaseURL: "https://descubriendoelcaribe-fb135.firebaseio.com",
  projectId: "descubriendoelcaribe-fb135",
  storageBucket: "descubriendoelcaribe-fb135.appspot.com",
  messagingSenderId: "586415413263"
};
firebase.initializeApp(config);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(Vuex);
Vue.use(Vuetify, { theme: {
  primary: '#4785f5',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
