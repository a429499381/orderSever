import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import User from '../views/user.vue'
import info from '../components/info..vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    // 页面路由 检测
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token')
      if (!token) {
         next('/login')
      }
      if (token) {
        // localStorage.removeItem('token')
        next()
      }

    }

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    //动态路由
    path: '/info/:id/:ids',
    name: 'info',
    component: info,
  }
]

const router = new VueRouter({
  routes
})

export default router