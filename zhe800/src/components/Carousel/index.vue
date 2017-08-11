<template>
    <div class='banner'>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in bannerList" :key="item">
                <img :src="item.imgurl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'autoPhoto',
  props: {
      bannerList: {
          default: []
      }
  },
  data(){
      return {
        swiperOption: {
           autoplay: 1000,
           pagination : '.swiper-pagination'
        }
      }
  }
}
</script>

<style scoped lang="less">
.banner{
    width:100%;
    img{
        width:100%;
        height:100%;
    }
}
.tablist{
    width:100%;
    .tabuls{
        width:100%;
        display:flex;
        height:1rem;
        margin-top:.1rem;
        li{
            width:25%;
            img{
                width:60%;
                margin-left:20%;
                margin-top:.15rem;
            }
            span{
              margin-top:.1rem;display:inline-block;
              width:100%;
              text-align:center;
            }
        }
    }
    .logoimg{
        width:100%;
        height:auto;
        img{
            width:100%;
        }
    }
    .three-banner{
        width:100%;
        .three-banner-list{
            float:left;
              width:50%;
            &:first-child{
                width:50%;
            }
        }
        img{
           width:100%;
        }
    }
}
</style>
