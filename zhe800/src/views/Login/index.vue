<template>
  <div class="login-page">
    <div class="header">
      <span class="go"></span>
      <img src="https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_01.png" alt="">
    </div>
    <section class="tab">
      <div class="phone">
        <a href="javascript:;">短信验证登陆</a>
      </div>
      <div class="account">
        <a href="javascript:;">账号密码登陆</a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login-page{
  width: 100%;
  height: 100%;
}
.header{
  position: relative;
  width: 100%;
  img{
    width: 100%;
  }
  .go{
    position: absolute;
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background: #ccc;
    left: .1rem;
    top: .1rem;
  }
  .go:after{
    content: "";
    position: absolute;
    border:7px solid transparent;
    border-right-color: #ccc;
    right: 6px;
    top: 3px;
  }
  .go:before{
    content: "";
    position: absolute;
    border:7px solid transparent;
    border-right-color: #000;
    right: 7px;
    top: 3px;
  }
}
.tab{
  width: 100%;
  height: .5rem;
  display: flex;
  div{
    flex: 1;
    line-height: .5rem;
    text-align:center;
    a{
      color: #545c66;
      font-size: .16rem;
      padding: .1rem;
    }
    &.phone{

    }
  }
}
</style>
