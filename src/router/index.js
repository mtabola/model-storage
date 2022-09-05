import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/home-view/HomeView.vue'
import BlogView from '../views/blog-view/BlogView.vue'
import ModelView from '../views/model-view/ModelView.vue'
import AuthView from '../views/auth-view/AuthView.vue'

Vue.use(VueRouter)

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
		path: '/models',
		name: 'modelpage',
		component: ModelView
	},
	{
		path: '/auth',
		name: 'authorization',
		component: AuthView
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
