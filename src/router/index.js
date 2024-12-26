import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/404',
      name: 'notFound',
      meta:{
        title: "404找不到页面"
      },
      component: () => import('../views/404.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    },
    {
      path: '/Login',
      name: 'login',
      meta:{
        title: "登陆"
      },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta:{
        title: "注册"
      },
      component: () => import('../views/Register.vue')
    },
  ],
})

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title
  next()
})

export default router
