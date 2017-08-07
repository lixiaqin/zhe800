var shopCar={
  state:{
    buyList:''
  },
  getters:{

  },
  mutations:{
    BUY(state,buyItem){
      buyItem.count=1
      state.buyList.push(buyItem)
      localStorage.setItem('buyList',JSON.stringify(state.buyList))
    },
    BUYSAME(state,obj){
      let item=state.buyList[obj.index]
      item.count+=obj.count
      if(item.count>item.maxCount){
        item.count=item.maxCount
      }
      if(item.count<0){
        item.count=1
      }
      state.buyList.splice(obj.index,1,item)
      localStorage.setItem('buyList',JSON.stringify(state.buyList))
    }
  },
  actions:{
    buy({commit,state},userInfo){
       for(let i=0,len=state.buyList.length;i<len;i++){
          if(state.buyList[i].id==userInfo.id){
            commit('BUYSAME',{
              index:i,
              count:1
            })
            return
          }
       }
       commit('BUY',userInfo)
    }
  }
}
export default shopCar
