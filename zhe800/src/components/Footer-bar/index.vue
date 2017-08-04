<template>
  <div class="footer-bar">
    <nav>
      <router-link to="/home" active-class="active" class="home"><i class="icon"></i>首页</router-link>
      <router-link to="/special" active-class="active" class="classType"><i class="icon"></i>淘特价</router-link>
      <router-link to="/group" active-class="active" class="shopCar"><i class="icon"><b v-if="shopCount">{{shopCount}}</b></i>拼团</router-link>
      <router-link to="/shopcar" active-class="active" class="zoom"><i class="icon"></i>购物车</router-link>
      <router-link to="/mine" active-class="active" class="zoom"><i class="icon"></i>我的</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
