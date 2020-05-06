<template>
  <div id="app">
    <!-- 导航 -->
    <div id="footer-nav">
      <van-row>
        <van-col span="8" @click="go(1)">
          <router-link to="/">微信</router-link>
        </van-col>
        <van-col span="8" @click="go(2)">
          <router-link to="/about">订单</router-link>
        </van-col>
        <van-col span="8" @click="go(3)">
          <router-link to="/user">我的</router-link>
        </van-col>
      </van-row>
    </div>
    <!-- 主题内容 -->
    <transition enter-active-class="animated  pulse">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { getToken } from "../token";
import { success } from "./message";
export default {
  data() {
    return {
      oldKey: 1
    };
  },
  mounted() {
    let token = getToken();
    if (token) {
      success("token ok");
    }
  },
  computed: {},
  methods: {
    go(newKey) {
      console.log(this.oldKey, newKey);
      if (this.oldKey > newKey) {
        this.oldKey = newKey;
        console.log("left1");
      } else {
        this.oldKey = newKey;
        console.log("right");
      }
    }
  }
};
</script>

<style scope>
html body {
  background: #160e0e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #80ff80;
  min-height: 100vh;
  width: 100%;
  display: flex;
}
#footer-nav {
  background-color: rgb(17, 16, 16);
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 70px;
}
/* 主体内容 */
#con {
  width: 100%;
}

#footer-nav a {
  font-weight: bold;
  color: #e7e7e7;
}

#footer-nav a.router-link-exact-active {
  color: #00ff40;
}
</style>
