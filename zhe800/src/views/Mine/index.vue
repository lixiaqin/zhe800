<template>
  <div class="mine-page">
    <div class="mine-title">
      <!--<HeaderBar>-->
        <!--<div slot="headerLift">ss</div>-->
        <!---->
      <!--</HeaderBar>-->
       <div class="header"></div>
       <ul class="loginin">
         <li><router-link to="/login">登陆</router-link></li>| <li>注册</li>
       </ul>
    </div>
    <div class="order">
      <span>我的订单</span>
      <span class="go">查看全部</span>
    </div>
    <ul class="userOpt">
      <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUIzNzUwRUI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUIzNzUwRkI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQjM3NTBDQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQjM3NTBEQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6FEzmwAAAPtJREFUeNrsmDEKwkAQRXeXlCKWGmvxCqlFLCy9gr2VhWAXMFhYWZsr2AriATxCwAOklUTr+AdGSCUi6IywH97uQJrHZMlu1sZxbJAeWIMhaBqZFOAEFuASYOiDM2gZ2VBDJmAAIochYakDCIEVImQHckkcvz7KFOSCHcvZgTJytTWVG/k8HRrOKE1QqytNYn/RMavEqVLdMS/mxbyYF/Nin2UFSp5Vic3paANm2sQ24A6272ziv8ySeXm6sH7xe7Evi1XazvvqO1Zw3VHg0+b55vgig7KrPZBIF6RcHwP+0NFFxljJ3/iVnKhjGYjAnjdWqZTsQC7ZQ4ABAFEtJ0PmFo2QAAAAAElFTkSuQmCC" alt=""><a href="javascript:;">待付款</a></li>
      <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUIzNzUwRUI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUIzNzUwRkI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQjM3NTBDQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQjM3NTBEQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6FEzmwAAAPtJREFUeNrsmDEKwkAQRXeXlCKWGmvxCqlFLCy9gr2VhWAXMFhYWZsr2AriATxCwAOklUTr+AdGSCUi6IywH97uQJrHZMlu1sZxbJAeWIMhaBqZFOAEFuASYOiDM2gZ2VBDJmAAIochYakDCIEVImQHckkcvz7KFOSCHcvZgTJytTWVG/k8HRrOKE1QqytNYn/RMavEqVLdMS/mxbyYF/Nin2UFSp5Vic3paANm2sQ24A6272ziv8ySeXm6sH7xe7Evi1XazvvqO1Zw3VHg0+b55vgig7KrPZBIF6RcHwP+0NFFxljJ3/iVnKhjGYjAnjdWqZTsQC7ZQ4ABAFEtJ0PmFo2QAAAAAElFTkSuQmCC" alt=""><a href="javascript:;">待发货</a></li>
      <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUIzNzUwRUI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUIzNzUwRkI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQjM3NTBDQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQjM3NTBEQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6FEzmwAAAPtJREFUeNrsmDEKwkAQRXeXlCKWGmvxCqlFLCy9gr2VhWAXMFhYWZsr2AriATxCwAOklUTr+AdGSCUi6IywH97uQJrHZMlu1sZxbJAeWIMhaBqZFOAEFuASYOiDM2gZ2VBDJmAAIochYakDCIEVImQHckkcvz7KFOSCHcvZgTJytTWVG/k8HRrOKE1QqytNYn/RMavEqVLdMS/mxbyYF/Nin2UFSp5Vic3paANm2sQ24A6272ziv8ySeXm6sH7xe7Evi1XazvvqO1Zw3VHg0+b55vgig7KrPZBIF6RcHwP+0NFFxljJ3/iVnKhjGYjAnjdWqZTsQC7ZQ4ABAFEtJ0PmFo2QAAAAAElFTkSuQmCC" alt=""><a href="javascript:;">待收款</a></li>
      <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUIzNzUwRUI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUIzNzUwRkI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQjM3NTBDQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQjM3NTBEQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6FEzmwAAAPtJREFUeNrsmDEKwkAQRXeXlCKWGmvxCqlFLCy9gr2VhWAXMFhYWZsr2AriATxCwAOklUTr+AdGSCUi6IywH97uQJrHZMlu1sZxbJAeWIMhaBqZFOAEFuASYOiDM2gZ2VBDJmAAIochYakDCIEVImQHckkcvz7KFOSCHcvZgTJytTWVG/k8HRrOKE1QqytNYn/RMavEqVLdMS/mxbyYF/Nin2UFSp5Vic3paANm2sQ24A6272ziv8ySeXm6sH7xe7Evi1XazvvqO1Zw3VHg0+b55vgig7KrPZBIF6RcHwP+0NFFxljJ3/iVnKhjGYjAnjdWqZTsQC7ZQ4ABAFEtJ0PmFo2QAAAAAElFTkSuQmCC" alt=""><a href="javascript:;">待评价</a></li>
      <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUIzNzUwRUI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUIzNzUwRkI5Q0UxMUU2OTFFN0U2MkU5NzAwMEQ5QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQjM3NTBDQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQjM3NTBEQjlDRTExRTY5MUU3RTYyRTk3MDAwRDlCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6FEzmwAAAPtJREFUeNrsmDEKwkAQRXeXlCKWGmvxCqlFLCy9gr2VhWAXMFhYWZsr2AriATxCwAOklUTr+AdGSCUi6IywH97uQJrHZMlu1sZxbJAeWIMhaBqZFOAEFuASYOiDM2gZ2VBDJmAAIochYakDCIEVImQHckkcvz7KFOSCHcvZgTJytTWVG/k8HRrOKE1QqytNYn/RMavEqVLdMS/mxbyYF/Nin2UFSp5Vic3paANm2sQ24A6272ziv8ySeXm6sH7xe7Evi1XazvvqO1Zw3VHg0+b55vgig7KrPZBIF6RcHwP+0NFFxljJ3/iVnKhjGYjAnjdWqZTsQC7ZQ4ABAFEtJ0PmFo2QAAAAAElFTkSuQmCC" alt=""><a href="javascript:;">退款/售后</a></li>
    </ul>
    <div class="module" v-for="i in userItem">
      <span>{{i.name}}</span><span class="go"></span>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from '@/components/Header'
  import FooterBar from '@/components/Footer-bar'
  export default {
    name: 'Mine',
    data () {
      return {
          userItem:[
            {name:'购物车'},
            {name:'优惠券'},
            {name:'收藏夹'},
            {name:'足迹'},
            {name:'帮助与客服'},
            {name:'下载折800APP'}
          ]
      }
    },
    components:{
      HeaderBar,
      FooterBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine-page{
  width: 100%;
  height: 100%;
  background-color: #F6F6F6;
}
.mine-title{
   width:100%;
   height:150px;
   background: -webkit-linear-gradient(left, rgba(245, 49, 17, 0.91), rgba(255, 71, 0, 0.93));
   .header{
     width:100%;
     padding:35px 0;
   }
   .loginin{
     margin:0 auto;
     width:150px;
     display: flex;
     border:2px solid #fff;
     height:36px;
     border-radius:20px;
     align-items: center;
     color:#fff;
     li{
       flex:1;
       font-size:18px;
       text-align: center;
       vertical-align: middle;

     }
   }
}
.order{
  width: 100%;
  height: .4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#fff;
  span{
    margin-left:.2rem;
  }
  .go{
    margin-left: 0;
    margin-right: .2rem;
  }
}
.go{
  position: relative;
}
.go:after{
  content: "";
  position: absolute;
  border:7px solid transparent;
  border-left-color: #fff;
  right: -19px;
  top: 0;
}
.go:before{
  content: "";
  position: absolute;
  border:7px solid transparent;
  border-left-color: #000;
  right: -20px;
  top: 0;
}
.userOpt{
  width: 100%;
  height: .4rem;
  border-top: .01rem solid #f1f1f1;
  padding: .1rem 0;
  display: flex;
  background:#fff;
  li{
    flex:1;
    display: flex;
    flex-direction: column;
    img{
      display: block;
      width: .5rem;
      width: .2rem;
      margin: 0 auto;
    }
    a{
      text-align: center;
      margin-top: .1rem;
    }
  }
}
.module{
  width: 100%;
  height: .4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:#fff;
  span{
    margin-left: .2rem;
  }
  .go{
    margin-left: 0;
    margin-right: .2rem;
  }
}
</style>
