<template>
  <div class="home-nav">
    <div class="wx-list">
      <div class="wx-item" @click="wx(item)" v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
    <div class="wx-data"  v-for='(item, index) in message' :key='index'>  
        <p class='wx-user' >{{item.user1}}</p>
        <p class='wx-me' >{{item.user2}}</p>
        <!-- <p class='wx-me' v-for='(item, index) in message' :key='`me${index}`'>{{item.user2}}</p> -->
    </div>
  </div>
</template>

<script>
import { success } from "../message";
export default {
  name: "head-nav",
  data() {
    return {
      list: [1, 222, 3, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9],
      message: [
        {
          user1: "你好",
          user2: "要点什么",
        
        },
        {
          user1: '尾插',
          user2: 'ok',
        }
      ]
    };
  },
  methods: {
    // 点击微信图标要做的事情
    wx(value) {
      success(value);
    }
  }
};
</script>
 
<style scoped>
.home-nav {
  flex: 1;
  height: 100%;
  background: rgb(71, 63, 63);
  display: flex;
}
.wx-list {
  width: 80px;
  height: 100vh;
  border-right: 1px solid rgb(141, 235, 165);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: contain;
}
.wx-item {
  width: 100%;
  line-height: 80px;
  overflow: hidden;
}

.wx-item:hover {
  background: rgb(228, 163, 163);
  color: rgb(5, 110, 31);
}
.wx-message {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.wx-user {
  padding-left: 40px;
 align-self: start;
}
.wx-me {
  padding-right: 40px;
}

</style>
