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
    <section>
      <div class="phone-box">
        <p>
          <input type="text" placeholder="手机号" class="user">
        </p>
        <p>
          <input type="password" placeholder="密码" class="pwd">
        </p>
      </div>
      <div class="account-box">
        <p>
          <input type="text" placeholder="手机号/邮箱/用户名" class="user">
        </p>
        <p>
          <input type="password" placeholder="密码" class="pwd">
        </p>
      </div>
      <button class="login">登录</button>
      <div class="loginP"><a href="javascript:;">快速注册</a><a href="javascript:;">忘记密码</a></div>
    </section>
    <section class="others">
      <h2><img src="https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_03.jpg" alt=""></h2>
      <h3><a href="javascript:;" class="weibo"></a><a href="javascript:;" class="qq"></a></h3>
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
  border-bottom: 1px solid #f4f4f4;
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
.phone-box{
  display: none;
}
.phone-box,.account-box{
  width: 100%;
  height: 1.5rem;
  p{
    margin:0 auto;
    margin-top: .1rem;
    width: 80%;
    height: .5rem;
    input{
      width: 100%;
      padding: .15rem 0;
      border: none;
      outline: none;
      padding-left: .25rem;
      border-bottom: 1px solid #f4f4f4;
      background: url('../../static/images/icon_all.png') no-repeat;
      background-size: .5rem;
      color: #b2b2b2;
    }
    .user{
      background-position: 0 .11rem;
    }
    .pwd{
      background-position: 0 -.55rem;
    }
  }
}
.login{
  margin-left: 10%;
  width: 80%;
  height: .4rem;
  border: 0;
  color: #FFF;
  border-radius: .05rem;
  text-align: center;
  background: -webkit-linear-gradient(left,#e63b53,#e63b53);
  font-size: .16rem;
}
.loginP{
  width: 90%;
  margin-left: 5%;
  height: .3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .1rem;
  a{
    color: #b2b2b2;
  }
}
.others{
  width: 100%;
  margin-top:.6rem;
  h2{
    width: 100%;
    img{
      width: 100%;
    }
  }
  h3{
    width: 40%;
    margin-left: 30%;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
  a{
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background: url('../../static/images/icon_all.png') no-repeat;
    background-size: .5rem;
    border-radius: .5rem;
  }
  .weibo{
    background-position: .05rem -1.27rem;
    border: 1px solid #f9a18d;
  }
  .qq{
    background-position: .05rem -1.79rem;
    border: 1px solid #f9a18d;
  }
  }
}
</style>
