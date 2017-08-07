
<template>
   <div class="home-page">
     <HeaderBar>
        <div class="header-center" slot="header-center"></div>
        <div class="header-right" slot="header-right"></div>
     </HeaderBar>
     <wrap></wrap>
     <FooterBar></FooterBar>

   </div>
</template>

<script>
import HeaderBar from '../../components/Header'
import FooterBar from '@/components/Footer-bar'
import wrap from '@/components/Wrap'
export default {
  name: 'home',
  components:{
     HeaderBar,
    FooterBar,
     wrap
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-page{
  margin-bottom:.4rem;
}
.header-center{
    width: .7rem;
    height: .26rem;
    background: url(//status.tuanimg.com/statics/mz/common/img/logo116x45.png) no-repeat 0 0;
    background-size: .7rem .26rem;
}
.header-right{
    width:.2rem;
    height:.18rem;
    background: url(//status.tuanimg.com/statics/mz/index/img/category-icon.png) no-repeat 0 0;
    background-size: .2rem .18rem;
    margin-top: .07rem;
}
</style>



