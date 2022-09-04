import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/blog-topic/BlogView.vue'
import ModelView from '../views/model-page/ModelView.vue'
import AuthView from '../views/log-pages/AuthView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'blogpage',
    component: BlogView
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') как конкретнее это работает????
  },
  {
    path:'/models',
    name:'modelpage',
    component: ModelView
  },
  {
    path:'/auth',
    name: 'authorization',
    component: AuthView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
