<template>
  <div class="render-price">
    <slot name='title' class='title'></slot>
    
  </div>
</template>

<script>

export default {
  name: 'render-price',
  components:{
     
  },
  data () {
    return {
        priceList:[
            {
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            },{
                imgurl:'//z13.tuanimg.com/imagev2/trade/700x700.109343b6dd704ee18ea33c3ff44e565b.310x310.jpg.webp',
                introduce:'优品|签收不粘锅炒锅32cm区数据回家',
                price:'28.9',
                discount:'1.5折'
            }
            
        ]
    }
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
</style>
