<template>
  <div class="woman-clothes">
     <carousel>
       
        <div slot="logoimg" class="logoimg">
         <img src="//z11.tuanimg.com/imagev2/wxyy/750x210.0c68689180d3f829af45494526673fad.png" alt="">
        </div>
      
     </carousel>
     <renderPrice>
       <div slot='title' class='title'>
        <img src="//z2.tuanimg.com/imagev2/wxyy/750x70.41d82c125a3ea3427383ef70ddb0c42a.png" />
       </div>
     </renderPrice>
    
  </div>
</template>

<script>
import carousel from '../compontent/carousel.vue'
import renderPrice from '../compontent/renderPrice.vue'
export default {
  name: 'woman-clothes',
  components:{
     carousel,
     renderPrice
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
