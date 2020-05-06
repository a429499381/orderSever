<template>
  <div class="home-nav">
    <div class="wx-list">
      <div class="wx-item" @click="wx(item)" v-for="item in list" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
import { success } from "../message";
export default {
  name: "head-nav",
  data() {
    return {
      list: [1, 222, 3]
    };
  },
  methods: {
    wx(value) {
      success(value);
    }
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
  justify-content: center;
  /* align-items: center; */
}
.wx-item {
  width: 100%;
  line-height: 80px;
}

.wx-item:hover {
  background: rgb(228, 163, 163);
  color: rgb(5, 110, 31);
}
</style>
