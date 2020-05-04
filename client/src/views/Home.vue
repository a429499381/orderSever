<template>
  <div class="home">
    <Nav></Nav>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue' 
// import {Loading } from 'vant'  
import Nav from '../components/nav.vue';
export default {
  name: "Home",
  components: {
    Nav
  },
};
</script>
<style  scoped>
  .home {
    flex: 1
  }
</style>
