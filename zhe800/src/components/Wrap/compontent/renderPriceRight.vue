<template>
  <div class="render-prices">
    
    <div class="PriceDetail" v-for='item in priceList'>
      <div class="pimg">
         <img :src="item.imgurl"/>
      </div>
      <div class='Pdiscount'>
        <p class='Pintroduce'>{{item.introduce}}</p>
        <p class='pman'><span  v-if='item.block'>{{item.man}}</span></p>
        <p class='Ppricecount'><span>￥{{item.price}}</span><span>{{item.discount}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'render-prices',
  components:{
     
  },
  data () {
    return {
        priceList:[]
    }
  },
  created(){
      let that=this;
      this.$axios.get('/priceData').then((res)=>{
         
          that.priceList=res.data.priceList;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title{
    width:100%;
    img{
        width:100%;
    }
}
.PriceDetail{
    width:50%;
    display:inline-block;
    img{
        width:96%;
        margin-left:2%;
    }
    .Pdiscount{
        width:100%;
        .Pintroduce{
            width:90%;
            margin-left:5%;
            white-space:nowrap; 
            overflow:hidden; 
            text-overflow:ellipsis;
            margin:.05rem 5%;
        }
        .pman{
            width:90%;
            margin-left:5%;
            height:.2rem;
            span{
                color:#ff4545;
                width:.3rem;
                display:block;
                border:1px solid #ff4545;
            }
        }
        .Ppricecount{
            width:90%;
            display:flex;
            justify-content: space-between;
            align-item:center;
            margin:.1rem 5%;
            span{
                &:first-child{
                    font-size:.18rem;
                    color:#ff4545;
                }
            }
        }
    }
}
</style>
