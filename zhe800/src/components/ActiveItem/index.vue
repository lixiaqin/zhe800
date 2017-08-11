<template>
    <div class="active">
        <!-- <div class="marginHeight"></div>
        <div class="reactContent">
            
        </div> -->
        <router-link :to="activeItem.src">
            <img :src="activeItem.image" alt="">
            <p v-if="activeItem.msg">{{activeItem.msg}}</p>
        </router-link>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'autoPhoto',
  props: {
      activeItem: {
          default: {
              image: "",
              text: ""
          }
      }
  }
}
</script>

<style scoped lang="less">

.active{
    width:100%;
    overflow: hidden;
    // position: relative;
    // .marginHeight{
    //     margin-top: 70%;
    // }
    // .reactContent{
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: #f00;
    // }
    a{
        padding: 0.1rem 0;
        display: block;
    }
    img{
        width: 100%;
        display: block;
    }
}
</style>
