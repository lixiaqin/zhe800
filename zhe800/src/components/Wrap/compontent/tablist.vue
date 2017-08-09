

<template>
   <div class="tablist-page">
      <div class="classtabs">
        <div class="classList"> 
          <div class="classify" v-for="(item,index) in classifyList"><span @click="tabfn(index)">{{item.name}}</span></div>
        </div>
     </div>
      <div class="content-slider">
      <div class="content-slider-item">
          <div class="slider-page" v-for="item in classifyList">
            <slot :name="item.component"></slot>
          </div> 
      </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'TabList',
  props:{
      classifyList:Array
  },
  data () {
    return {
       
    }
  },
  mounted(){
    $(this.$el).find('.classList').find('span').eq(0).addClass('choose')
  },
  methods:{
    tabfn(index){
     $(this.$el).find('.classify').eq(0).find('spam').addClass('choose');
      $(this.$el).find('.classify').find('span').removeClass('choose').eq(index).addClass('choose');
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
.classtabs{
    width:100%;
    height:.6rem;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content: center;
    align-items: center;
    .classList{
        border:1px solid #ef4949;
        border-radius:.05rem;
        display:flex;
        justify-content: center;
        align-items: center;
         color:#ef4949;
      
     
      span{
          display:inline-block;
           padding:.1rem .2rem;
           
            
      }
            
    }
}
.choose{
     background:#ef4949;
     color:#fff;
}
</style>

