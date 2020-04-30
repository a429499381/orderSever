<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/user">user</router-link>
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #e7e7e7;
}

#nav a.router-link-exact-active {
  color: #00ff40;
}
</style>
