<template>
   <div class="header-bar">
    <div class="header-left">
      <slot name="header-left"></slot>
    </div> 
    <div class="header-center">
       <slot name="header-center"></slot>
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
      default:''
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
  justify-content: center;
  align-items: center;
  position:relative;
  border-bottom: .001rem solid #d9d9d9;
  background-color: #fff;
  padding:.05rem 0;
  .header-left{
    position:absolute;
    left:.1rem;
  }
  .header-right{
    position:absolute;
    right:.05rem;
    top:.05rem;
  }
}
</style>
