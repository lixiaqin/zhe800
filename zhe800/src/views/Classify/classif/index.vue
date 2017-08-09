

<template>
   <div class="classleft-page">
     <div class='class-item'>
        <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide v-for="item in data">
          <div>{{item.name}}</div>
         </swiper-slide>
          
       </swiper>
      <div class="swiper-scrollbar"></div>
     </div>
     
   </div>
</template>

<script>

export default {
  name: 'classif',
  data () {
    return {
      swiperOption: {
       
         direction: 'vertical',
         scrollbar:'.swiper-scrollbar',
          mousewheelReleaseOnEdges : true,
          slidesPerView:'auto'
	
        },
        data:[{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        },{
            name:'地方'
        }]
    }
  },
  components:{
     
   
   
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
body,html{
    width:100%;
    height:100%;
    overflow: hidden;
}
.classleft-page{
    width: 100%; height: 100%;
}
.class-item{
    width:.5rem;
    height:500px;;
    overflow:hidden;
    border:1px solid #ccc;
    div{
        padding:.1rem .05rem;
    }
}
.swiper-slide{
   
}
</style>

