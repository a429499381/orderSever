<template>
  <div class="home-nav">
    <div class="wx-list">
      <div class="wx-item" v-for='item in list' :key='item'>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "head-nav",
  data() {
    return {
      list: [1, 222, 3]
    };
  }
};
</script>
 
<style scoped>
.home-nav {
  flex: 1;
  /* min-height: 100px; */
  height: 100%;
  background: rgb(71, 63, 63);
}
.wx-list {
  width: 80px;
  min-height: 100vh;
  border-right: 1px solid rgb(141, 235, 165);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wx-item {
  width: 100%;
  line-height: 40px;
  

}
</style>
