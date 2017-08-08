<<<<<<< HEAD
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
  height:.4rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  position:relative;
  padding:.05rem 0;
  .header-left{
    margin-left:.1rem;
  }
  .header-right{
   margin-right:.05rem;
  }
}
</style>
