import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/home-view/HomeView.vue'
import BlogView from '../views/blog-view/BlogView.vue'
import ModelView from '../views/model-view/ModelView.vue'
import BlueprintView from '../views/blueprint-view/BlueprintView.vue'
import DocsView from '../views/docs-view/DocsView.vue'
import CourseworkView from '../views/coursework-view/CourseworkView.vue'
import AuthView from '../views/auth-view/AuthView.vue'
import RegView from '../views/auth-view/RegView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home-page',
		component: HomeView
	},
	{
		path: '/blogs',
		name: 'blog-page',
		component: BlogView
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') как конкретнее это работает????
	},
	{
		path: '/models',
		name: 'model-page',
		component: ModelView
	},
	{
		path: '/blueprints',
		name: 'blueprint-page',
		component: BlueprintView
	},
	{
		path: '/documentation',
		name: 'documentation-page',
		component: DocsView
	},
	{
		path: '/courseworks',
		name: 'coursework-page',
		component: CourseworkView
	},
	{
		path: '/auth',
		name: 'auth-page',
		component: AuthView
	},
	{
		path: '/registration',
		name: 'reg-page',
		component: RegView
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
