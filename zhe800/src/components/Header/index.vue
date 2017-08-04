<template>
   <div class="header-bar">
     <slot name="headerLift"></slot>
     <h2 class="title">{{title}}</h2>
     <slot name="headerRight"></slot>
   </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
