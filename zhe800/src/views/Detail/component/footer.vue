<template>
  <div class="footer-page">
     <ul>
       <li>
         <span></span>
         <p>客服</p>
       </li>
      <li>
         <span></span>
         <p>店铺</p>
       </li>
       <li>
         <span></span>
         <p>收藏</p>
       </li>
       <li class=''>
       <router-link :to="'/shoppage/'+'1'">  
           <span class='shopping-car'  :detailList='detailList'>加入购物车</span> 
           
       </router-link>
       </li>
       <li>
           <router-link :to="'/shoppage/'+'2'">  
              <span class="now">立即购买</span> 
          </router-link>
       </li>
     </ul>
  </div>
</template>

<script>

export default {
  name: 'footer',
  components:{
     
  },
  props:['detailList'],
  data () {
    return {
      detailList:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer-page{
  ul{
    position:fixed;
    bottom:0;
    width:100%;
    background: #fff;
    display: flex;
    border-top:.01rem solid #ccc;
    height:.5rem;
    li{
      flex:1;
      border-right:.01rem solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
        width:.1rem;
        height: .1rem;
        display: block;
        border:.01rem solid #ccc;
        margin-bottom:.04rem;
      }
      &:nth-child(4){
        flex:2;
        background: #ff8b8b;
      }
      &:nth-child(5){
        flex:2;
        background: #e60044;
      }
      .shopping-car,.now{
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        color: #fff;
        font-size:.16rem;
      }
    }
  }
}
</style>
