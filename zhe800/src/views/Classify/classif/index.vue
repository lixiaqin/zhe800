

<template>
   <div class="classleft-page">
     <div class='class-item'>
        <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide v-for="(item,index) in datas">
          <div v-for='i in item.tag' v-if='i.level==1'  @click='tabToggle(index)'>{{i.category_name}}</div>
         </swiper-slide>       
       </swiper>
      
     </div>
     <div class='class-page-right'>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,indexs) in datas">
               <div v-if='indexs==id'>
                  <h2>为你推荐</h2>
                  <img :src='item.banner[0].pic' class='class-banner'/>
                  <h2>热门分类</h2>
                <div v-for='i in item.tag' v-if='i.level==2'>
                   <div class='hot-class'>
                     <img :src='i.pic' />
                     <p>{{i.category_name}}</p>
                   </div>
                </div>
               </div>
          </swiper-slide>       
        </swiper>
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
        datas:{},
        id:1
    }
  },
  created(){
      var that = this;
      var promise = new Promise(function(resolve, reject) {
      that.$axios.get('/classType').then(function (res) {
         resolve(res.data)
       })
     }).then(function(data){
       that.datas=data;
        console.log(that.datas)
     })
    
      
  },
  methods:{
    tabToggle(index){
      this.id=index;
      console.log(this.datas)
    }
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
    width: 100%; height: 100%;display:flex;
   display:flex;
}
.class-item{
    width:.9rem;
    height:100%;;
    overflow:hidden;
    border:1px solid #ccc;
    
    .swiper-slide{
        padding:.14rem .05rem;
        text-align:center;
        border-bottom:.01rem solid #ccc;
    }
}
.class-page-right{
      width:100%;
      height:100%;
      overflow:hidden;
      h2{
        height:.3rem;
        line-height:.3rem;
        padding-left:.2rem;
        font-size:.14rem;
        font-weight: bold;
      }
      .class-banner{
        width:100%;
      }
      .hot-class{
        width:30%;
        float:left;
        margin-left:3.3%;
        margin-top:.1rem;
        img{
          width:75%;
          margin-left:10%;
        }
        p{
          width:100%;
          text-align:center;
        }
      }
     
}

</style>

