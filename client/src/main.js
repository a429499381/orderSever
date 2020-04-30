import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL='http://localhost:3000/api/users'; 



//引入Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animated)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')