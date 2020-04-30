<template>
  <div class="info">
    <h1>This is an info page</h1>
    <h2>id is {{id}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0
    };
  },
  created() { 
    this.id = this.$route.params.id;
    // console.log('this.$route: ', this.$route)

  },
methods: {
  
},
};
</script>
