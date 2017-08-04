<template>
  <div class="footer-bar">
    <nav>
      <router-link to="/home" active-class="active" class="home"><i class="icon"></i>首页</router-link>
      <router-link to="/special" active-class="active" class="classType"><i class="icon"></i>淘特价</router-link>
      <router-link to="/group" active-class="active" class="shopCar"><i class="icon"></i>拼团</router-link>
      <router-link to="/shopcar" active-class="active" class="zoom"><i class="icon"></i>购物车</router-link>
      <router-link to="/mine" active-class="active" class="zoom"><i class="icon"></i>我的</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.active{
  color:#E30C26;
}
.footer-bar{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.05rem 0;
  z-index:100;
  background:#fff;
  border-top:.01rem solid #D8D8D8;
  nav{
    width: 100%;
    display: flex;
    align-self: center;
    a{
      flex: 1;
      text-align: center;
      color: grey;
      &.active{
         color: #ff712b;
       }
    }
  }
}
  .icon{
    display: block;
    width: 20px;
    height: 20px;
    background: #ccc;
    margin: 0 auto;
  }
</style>
