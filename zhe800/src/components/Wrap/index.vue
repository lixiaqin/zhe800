<template>
  <div class="wrap-page">
     <womenwear>
        <div slot="hotSale"> <renderPrice> </renderPrice></div>
        <div slot="hotBrand"><renderPrices></renderPrices></div>
     </womenwear>
  </div>
</template>

<script>
import Navtab from './Navtab/index.vue'
import womenwear from './RenderParticular/womenwear.vue'
import renderPrice from './compontent/renderPriceLeft.vue'
import renderPrices from './compontent/renderPriceRight.vue'
export default {
  name: 'wrap',
  components:{
     Navtab,
     womenwear,
     renderPrice,
     renderPrices
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
