<template>
  <div id="app">
    <div id="nav">
      <van-row>
        <van-col span="8">
          <router-link to="/">微信</router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/about">订单</router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/user">我的</router-link>
        </van-col>
      </van-row>
    </div>

    <transition enter-active-class="animated fadeIn">
      <router-view />
    </transition>
  </div>
</template>

<style>
html {
  background: #160e0e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #80ff80;
   height:100%;
    display:flex;
    flex-direction:column;
}
#nav {
  padding: 30px;
   /* flex：0 0 auto; */
}

#nav a {
  font-weight: bold;
  color: #e7e7e7;
}

#nav a.router-link-exact-active {
  color: #00ff40;
}
</style>
