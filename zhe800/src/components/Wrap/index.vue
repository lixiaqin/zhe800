<template>
  <div class="wrap-page">
     <Navtab>
       <div slot="downkey" class="downkey"></div>
     </Navtab>
     <womenwear></womenwear>
  </div>
</template>

<script>
import Navtab from './Navtab/index.vue'
import womenwear from './RenderParticular/womenwear.vue'
export default {
  name: 'wrap',
  components:{
     Navtab,
     womenwear
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
