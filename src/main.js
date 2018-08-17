// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase'

// import Axios from 'axios';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
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

// Vue.use(Axios);
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
