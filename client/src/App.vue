<template>
  <div id="app">
    <!-- 导航 -->
    <div id="nav">
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
    <div id="con">
      <transition
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutLeft"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { getToken } from '../token';
import { success } from './message';
export default {
  data() {
    return {
      oldKey: 1
    };
  },
  mounted() {
    let token = getToken()
    if(token) {
        success('token ok')
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

<style>
html body {
  background: #160e0e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #80ff80;
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-items: center;
  /* justify-content: center; */
  /*父元素常见属性*/
  /*设置主轴的方向*/
  /*flex-direction：  row行,column列*/
  /*设置主轴上的子元素排列方式*/
  /*justify-content： space-around平分,space-between两边贴中间平分,space-evenly每个间距相同*/
  /*设置子元素是否换行*/
  /*flex-wrap：wrap/nowrap*/
  /*设置侧轴上的子元素排列方式（单行）*/
  /*align-items：stretch 拉伸*/
  /*设置侧轴上的子元素的排列方式（多行）*/
  /*align-content：stretch 子元素高度平分父元素高度*/
  /*flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap*/
  /*子元素常见属性*/
  /*align-self 子元素自己在侧轴的排列方式*/
  /*order 属性定义子项的排列顺序(前后顺序) */
}
#con {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
#nav {
  width: 100%;
  line-height: 70px;
}

#nav a {
  font-weight: bold;
  color: #e7e7e7;
}

#nav a.router-link-exact-active {
  color: #00ff40;
}
</style>
