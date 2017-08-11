<template>
  <div class="shopdetail-page">
       <HeaderBar class='header'>
            <div class="header-left" slot="header-left"><</div>
            <div class="header-center" slot="header-center">选择商品</div>
       </HeaderBar>
      {{detailList}}
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
export default {
  name: 'shopdetail',
  components:{
     HeaderBar
  },
  props:['detailList'],
  data () {
    return {
       
    }
  },
  created(){
     
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .header{
     border-bottom: .01rem #e3e3e3 solid;
     background: #f9f9f9;
     color: #333333;
     font-size: .18rem;
 }
</style>
