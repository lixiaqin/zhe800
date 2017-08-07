<template>
  <div class="nav-tab" v-affix="20">
     <div class="nav-recommend">推荐</div>
      <div class="scroll-view">      
           <swiper :options="swiperOption" ref="mySwiper" >
            <swiper-slide v-for="i in navList"  id="navlists">
               {{i.name}}
            </swiper-slide>  
           </swiper>    
      </div>
      
     <slot name="downkey" class="downkey">dfdf</slot>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from 'zepto'
export default {
  name: 'navTab',
  data () {
    return {
      navList:[{
        name:'女装'
      },{
        name:'鞋包'
      },{
        name:'居家'
      },{
        name:'母婴儿童'
      },{
        name:'美妆'
      },{
        name:'男装'
      },{
        name:'内衣'
      },{
        name:'配饰'
      }],
       swiperOption: {
           mousewheelControl : true,
          mousewheelReleaseOnEdges : true,
          slidesPerView:'auto'
        }
    }
  },
  directives:{
    affix:{
        inserted: function(el, binding) {
            var els = el;
            $(window).scroll(function() {
                if ($(this).scrollTop() > binding.value) {
                    $(els).css({
                        'position': 'fixed'
                    }).animate({
                        'top': 0,
                        'left': 0
                    })
                } else {
                    $(els).css({
                        'position': 'relative'
                    })
                }
            })

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
    position:relative;
    font-size:.16rem;
    .nav-recommend{
      position:absolute;
      left:0;
      top:0;
      width:.6rem;
      height:.4rem;
      text-align:center;
      line-height:.4rem;
    }
    .downkey{
      position:absolute;
      right:.1rem;
      top:.1rem;
      background: url(//status.tuanimg.com/statics/mz/index/img/drop-down-bg.png) no-repeat 0 0;
      background-size: contain;
      width: .2rem;
      height: .2rem;
      
    }
}
.scroll-view {
  width:70%;
  height:.4rem;
  line-height:.4rem;
  margin-left:15%;
  .swiper-slide{
    padding:0 .05rem;
    width:65px;text-align:center
  }

}
</style>
