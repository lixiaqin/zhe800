<template>
  <div class="shopCar">
    <div class="empty">
      <img src="https://i0.tuanimg.com/ms/zhe800h5/dist/img/cart_list_count/icon_cart.png" alt="">
      <p>您的购物车是空的，快去挑选商品吧</p>
      <button>去登录</button>
    </div>
    <div class="taobao">
      <div class="tb">
        <img src="https://i0.tuanimg.com/ms/zhe800mall/dist/img/ico_tao2.png" alt="">
        <span>淘宝购物车商品入口</span>
      </div>
      <span class="go"></span>
    </div>
    <div class="hotshop">
      <h2 class="line">
        <img src="https://i0.tuanimg.com/ms/zhe800mall/dist/img/succes/hot1.png" alt="">
        <span>购买此商品用户同时购买了</span>
      </h2>
      <div class="shop">

      </div>
    </div>
    <div class="account">
      <span class="all-check-box">
        <i class="all-check"></i>
        全选
      </span>
      <div class="account-right">
        <h1>
          <p>合计：<span></span></p>
          <p>不含运费、平台券</p>
        </h1>
        <span class="pay">
        结算(<span></span>)
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopCar',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopCar{
  width: 100%;
  height: 100%;
  background: rgb(245, 245, 244);
}
.empty{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.6rem;
  img{
    margin-top: 0.5rem;
  }
  p{
    margin-top: 0.2rem;
  }
  button{
    width: 1.1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    vertical-align: middle;
    color: #444;
    text-align: center;
    border: .01rem solid #60656f;
    -webkit-border-radius:.05rem;
    border-radius: .04rem;
    margin-top: 0.4rem;
  }
}
.taobao{
  width: 100%;
  height: 0.4rem;
  margin-top: 0.1rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tb{
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
    img{
      display: block;
      width: 20px;
      height: 20px;
    }
    span{
      margin-left: 0.1rem;
    }
  }
}
.go{
  position: relative;
}
.go:after{
  content: "";
  position: absolute;
  border:10px solid transparent;
  border-left-color: #fff;
  right: 1px;
  top: -9px;
}
.go:before{
  content: "";
  position: absolute;
  border:10px solid transparent;
  border-left-color: #000;
  right: 0px;
  top: -9px;
}
.hotshop{
  margin-top: 0.2rem;

}
.line{
  width: 100%;
  height: .01rem;
  background: #d5d5d5;
  z-index: 3;
  position: relative;
  img{
    display: block;
    width: 0.21rem;
    height: 0.21rem;
    position: absolute;
    margin-left: -.9rem;
    left: 50%;
    top: -.09rem;
    z-index: 10;
  }
  span{
    z-index: 10;
    color: #545c66;
    font-size: 0.12rem;
    padding: 0.12rem;
    position: absolute;
    left: 50%;
    margin-left: -1rem;
    top: -.18rem;
    padding-left:.36rem;
  }
}
.account{
  width: 100%;
  height: 0.5rem;
  display: flex;
  position: fixed;
  bottom:0;
  left: 0;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  border-top:1px solid #eee;
  .all-check-box{
    display: inline-block;
    display: flex;
    margin-left:10px;
    line-height:20px;
    .all-check{
      height: 20px;
      display: block;
      width:20px;
      border:2px solid #ccc;
      border-radius: 50px;
      margin-right: 5px;
    }

  }
  .account-right{
    display: flex;
    height:100%;

    .pay{
      width:80px;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background:#b6b6b6;
      color:#fff;
    }
    h1{
      line-height: 17px;
      padding:0 10px;
      p:first-child{
        margin-top:8px;
        margin-left:10px;
      }
      p:last-child{
       color:#a99f9f;
        font-size:10px;
      }
    }
  }
}

</style>
