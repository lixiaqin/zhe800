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
            themelistt:[{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl:'//z3.tuanimg.com/imagev2/wxyy/90x90.bbd79ca51d8f6c79d94255196afb550b.png',
            tabname:'签约领红包'
        },{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl:'//z3.tuanimg.com/imagev2/wxyy/90x90.84f55d5c8bdf53b89e5191a251a92c71.png',
            tabname:'9.9包邮'
        },{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl:'//z11.tuanimg.com/imagev2/wxyy/90x90.44b033e118f9e26baa70cc33e8b4a9f5.png',
            tabname:'有品质'
        },{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
           iconurl:'//z11.tuanimg.com/imagev2/wxyy/90x90.7a9f9149946bedc6a6533bc0f5b12b90.png',
            tabname:'品牌团'
        },{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/750x286.955bf255e39ec1b630b6e4c45c86db10.jpg',
            iconurl:'//z11.tuanimg.com/imagev2/wxyy/180x180.7a400ba19594dfd70c5f11eb6ad6f5a8.png',
            tabname:'热销榜'
        }],
        threeBanner :[{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/375x376.2ac6c0563654d5c7e5efdef4bed23417.jpg'
        },{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/375x188.0c2b8a8d83e9c6a962f052afe82085e4.jpg'
        },{
            imgurl:'//z11.tuanimg.com/imagev2/wxyy/375x188.0c2b8a8d83e9c6a962f052afe82085e4.jpg'
        }]
        }
       
      }
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
