<template>
   <div class="header-bar">
    <div class="header-left">
      <slot name="header-left"></slot>
    </div>
    <div class="header-center">
        <span v-if="title.indexOf('/') != -1">
          <img :src="title" />
        </span>
        <span v-else>{{title}}</span>
    </div>
     <div class="header-right">
       <slot name="header-right"></slot>
     </div>
   </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props:{
    title:{
      default:'标题'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-bar{
  width:100%;
  height:.44rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  position:relative;
  .header-left{
    margin-left:.1rem;
  }
  .header-center{
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.44rem;
    text-align: center;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    span{
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      height: 0.44rem;
    }
    img{
        display: block;
        height: 50%;
    }
  }
  .header-right{
   margin-right:.05rem;
  }
}
</style>

