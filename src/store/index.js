import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    lang: "es",
    mainIconHeader: "menu",
    MainTitleHeader : "Descubriendo el caribe",
    urlToBack : "/"
  },
  mutations: {
    changeLang(state, payload){
      state.lang = payload.lang;
    },
    changeMainIconHeader(state, payload){
      state.mainIconHeader = payload.mainIconHeader;
    },
    changeMainTitleHeader(state, payload){
      console.log(payload.MainTitleHeader);
      state.MainTitleHeader = payload.MainTitleHeader;
    },
    changeUrlToBack(state, payload){
      console.log(payload);
      state.urlToBack = payload.urlToBack;
    }
  }
})


