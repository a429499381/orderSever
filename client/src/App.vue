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

    <div id="con">
      <transition  enter-active-class="animated fadeIn">
             <router-view />
        </transition>
    </div>
   
  </div>
</template>

<style>
html body {
  background: #160e0e;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #80ff80;
   min-height: 100vh;
   width: 100%;
    display:flex;
    flex-direction:column-reverse;
    align-items: center;
    /* justify-content: center; */

}
#con {
  min-height: 50vh;
 
}
#nav {
  width: 100%;
  line-height: 40px;
  
}

#nav a {
  font-weight: bold;
  color: #e7e7e7;
}

#nav a.router-link-exact-active {
  color: #00ff40;
}
</style>
