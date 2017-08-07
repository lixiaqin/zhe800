<template>
  <div id="autoPhoto">
     <div class='banner'>
       <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide v-for="item in ThemeList.themelistt">
          <img :src="item.imgurl" alt="">
         </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
     </div>
     <div class='tablist'>
       <ul class="tabuls">
         <li v-for="items in ThemeList.themelistt">
          <img :src="items.iconurl" alt="">
          <span>{{items.tabname}}</span>
         </li>
       </ul>
       <slot name="logoimg" class="logoimg"></slot>
       <div class="three-banner">
          <div class='three-banner-list' v-for="item in ThemeList.threeBanner">
            <img :src="item.imgurl" alt="">
          </div>
       </div>
     </div>
     <slot name='title' class='title'></slot>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'autoPhoto',
  data(){
      return {
          swiperOption: {
           autoplay: 1000,
           pagination : '.swiper-pagination'
        },
        ThemeList:{
           
        }
       
      }
  },
  created(){
      let that=this;
      this.$axios.get('/priceData').then((res)=>{
        
          that.ThemeList=res.data.ThemeList;
            console.log(that.ThemeList)
      })
  }
}
</script>

<style scoped lang="less">
html,body{
    width:100%;
    height:100%;
}
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
        height:1.5rem;
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
