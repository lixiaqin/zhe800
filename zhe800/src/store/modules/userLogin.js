let userData=JSON.parse(localStorage.getItem('user'))
var userLogin={
  namespaced: true,
  state:{
    userInfo:''||userData
  },
  getters:{

  },
  mutations:{
    LOGIN_IN(state,userInfo){
      state.userInfo=userInfo
      localStorage.setItem('user',JSON.stringify(userInfo))
    }
  },
  actions:{
    login_in({commit},userInfo){
      commit('LOGIN_IN',userInfo)
    }
  }
}
export default userLogin
