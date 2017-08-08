<<<<<<< HEAD
<template>
  <div class="woman-clothes">
     <carousel>
       
        <div slot="logoimg" class="logoimg">
         <img src="//z11.tuanimg.com/imagev2/wxyy/750x210.0c68689180d3f829af45494526673fad.png" alt="">
        </div>
        <div slot='title' class='title'>
         <img src="//z2.tuanimg.com/imagev2/wxyy/750x70.41d82c125a3ea3427383ef70ddb0c42a.png" />
       </div>
     </carousel>
     <div class="navtabs">
        <div class="tabsList"  v-for="(item,index) in tablist"><span @click="tabfn(index)">{{item.name}}</span></div>
        <div class="line"></div>
     </div>
    <div class="content-slider">
      <div class="content-slider-item">
          <div class="slider-page" v-for="item in tablist">
          <slot :name="item.component"></slot>
          </div> 
      </div>
    </div>
   
    <TabList :tablist='tablist'>
        <div slot="hotSale">sdfdsfds</div>
        <div slot="hotBrand">sdfsdfds</div>
     </TabList>
    
  </div>
</template>

<script>
import carousel from '../compontent/carousel.vue'
import TabList from '@/components/Wrap/compontent/tablist'
import $ from 'zepto'
export default {
  name: 'woman-clothes',
  components:{
     carousel,
     TabList
  },
  data () {
    return {
      tablist:[{
        name:'热卖爆款',
        component:'hotSale'
      },{
        name:'热门品牌',
        component:'hotBrand'
      }],
      addClass:false
    }
  },
  methods:{
    tabfn(index){
      $(this.$el).find('.tabsList').find('span').removeClass('choose').eq(index).addClass('choose');
      var SliderItem=$(this.$el).find('.slider-page')
       SliderItem.animate({
             translateX:-(100*index)+'%'
         },500,'ease')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title{
  width:100%;
  img{
    width:100%;
  }
}
.choose{
  color:#ff4545;
  border-bottom:.02rem solid #ff4545;
}
.navtabs{
  width:100%;
  height:.4rem;
  position:relative;
  .tabsList{
    width:50%;
    height:.4rem;
    background:#fff;
    float:left;
    display:flex;
    justify-content: center;
    align-items: center;
    span{
      display:block;
      height:.4rem;
      box-sizing:border-box;
      line-height:.4rem;
    }
  }
  
}
.content-slider{
        width:100%;overflow:hidden;
        .content-slider-item{
            width:200%;
           
           .slider-page{
               width:50%;
              float:left;
              
           }
        }
    }
</style>
=======
<template>
  <div class="woman-clothes">
     <carousel>


        <div slot='title' class='title'>
         <img src="//z2.tuanimg.com/imagev2/wxyy/750x70.41d82c125a3ea3427383ef70ddb0c42a.png" />
       </div>
     </carousel>
     <div class="navtabs" v-Affix="40">
        <div class="tabsList"  v-for="(item,index) in tablist"><span @click="tabfn(index)">{{item.name}}</span></div>
        <div class="line"></div>
     </div>
    <div class="content-slider">
      <div class="content-slider-item">
          <div class="slider-page" v-for="item in tablist">
          <slot :name="item.component"></slot>
          {{item.component}}
          </div>
      </div>
    </div>


  </div>
</template>

<script>
import carousel from '../compontent/carousel.vue'
import $ from 'zepto'
export default {
  name: 'woman-clothes',
  components:{
     carousel
  },
  data () {
    return {
      tablist:[{
        name:'热卖爆款',
        component:'hotSale'
      },{
        name:'热门品牌',
        component:'hotBrand'
      }],
      addClass:false
    }
  },
  mounted(){
    $(this.$el).find('.tabsList').find('span').eq(0).addClass('choose')
  },
  methods:{
    tabfn(index){
      $(this.$el).find('.tabsList').find('span').removeClass('choose').eq(index).addClass('choose');
      var SliderItem=$(this.$el).find('.slider-page')
       SliderItem.animate({
             translateX:-(100*index)+'%'
         },500,'ease')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title{
  width:100%;
  img{
    width:100%;
  }
}
.choose{
  color:#ff4545;
  border-bottom:.02rem solid #ff4545;
}
.navtabs{
  width:100%;
  height:.4rem;
  position:relative;
  .tabsList{
    width:50%;
    height:.4rem;
    background:#fff;
    float:left;
    display:flex;
    justify-content: center;
    align-items: center;
    span{
      display:block;
      height:.4rem;
      box-sizing:border-box;
      line-height:.4rem;
    }
  }

}
.content-slider{
        width:100%;overflow:hidden;
        .content-slider-item{
            width:200%;

           .slider-page{
               width:50%;
              float:left;

           }
        }
    }
</style>
>>>>>>> 46258893726f04695c0d097e65fd4ae02099970a
