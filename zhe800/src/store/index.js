import Vue from 'vue'
import Vuex from 'vuex'
import route from './modules/routerData'
import userLogin from './modules/userLogin'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    route,
    userLogin
  }
})
