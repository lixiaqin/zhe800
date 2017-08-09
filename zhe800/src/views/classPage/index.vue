<template>
  <div class="classPage">
      <HeaderBar>
        <div slot="header-left">
          <img src="//status.tuanimg.com/statics/mz/index/img/category-icon.png" />
        </div>
        <div slot="header-center">
          <div class="seatch">
             <i></i>男鞋
          </div>
        </div>
        <div slot="header-right">
          <router-link to="/classify">
            <img src="//status.tuanimg.com/statics/mz/index/img/category-icon.png" />
          </router-link>
        </div>
      </HeaderBar>
  </div>
</template>

<script>
  import HeaderBar from '../../components/Header'
  import FooterBar from '@/components/Footer-bar'
  import wrap from '@/components/Wrap'
  export default {
    name: 'classPage',
    data () {
      return {

      }
    },
    created(){
//        this.$axios.get('/classType').then(function (res) {
//          console.log(res)
//        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
