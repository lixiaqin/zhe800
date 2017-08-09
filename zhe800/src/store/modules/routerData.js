const route={
  namespaced: true,
  state:{
    routerData:[]
  },
  getters(state){
    return state.routerData
  },
  mutations:{
    SET_ROUTER(state,routerData){
      state.routerData=routerData
    }
  },
  actions:{
    setRouter({commit},routerData){
      commit('SET_ROUTER',routerData)
    }
  }
}
export default route
