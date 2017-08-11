<template>
  <div class="nav-tab" v-Affix="0">
     <div class="nav-recommend">推荐</div>
      <div class="scroll-view">
           <swiper :options="swiperOption" ref="mySwiper" >
            <swiper-slide v-for="i in navList"  id="navlists">
               {{i.name}}
            </swiper-slide>
           </swiper>
      </div>
     <slot name="downkey" class="downkey"></slot>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from 'zepto'
export default {
  name: 'navTab',
  props: {
    navList:{
      default: []
    }
  },
  data () {
    return {
       swiperOption: {
           mousewheelControl : true,
          mousewheelReleaseOnEdges : true,
          slidesPerView:'auto'
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-tab{
    width:100%;
    height:.4rem;
    background:#fff;
    display:-webkit-box;
    z-index: 100;
    font-size:.14rem;
    font-weight: normal;
    .nav-recommend{
      width:.6rem;
      height:.4rem;
      text-align:center;
      line-height:.4rem;
    }
    .downkey{
      background: url(//status.tuanimg.com/statics/mz/index/img/drop-down-bg.png) no-repeat 0 0;
      background-size: contain;
      width: .2rem;
      height: .2rem;
      margin:0 .1rem;

    }
    .scroll-view {
      height:.4rem;
      line-height:.4rem;
      -webkit-box-flex: 1;
      .swiper-slide{
        padding:0 .05rem;
        width:65px;text-align:center
      }

    }
}

</style>
