<template>
  <div id="menuList">
    <router-link v-for='items in menuList' to="#" :key="items" class="menuItem">
        <img :src="items.imgurl" alt="">
        <span>{{items.name}}</span>
    </router-link>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'menuList',
  props: {
      menuList: []
  }
}
</script>

<style scoped lang="less">

#menuList{
    width:100%;
    height: 1rem;
    display: -webkit-box;
    .menuItem{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        -webkit-box-flex: 1;
        width:0;
        height: 1rem;
        img{
            display: block;
            height: 40%;
        }
        span{
            font-size: 0.12rem;
            line-height: 0.3rem;
        }
    }
}
</style>
