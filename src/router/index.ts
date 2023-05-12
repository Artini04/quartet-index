import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/ResultsView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				title: 'Index - 日本語カルテット単語索引',
			},
		},
	],
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title as string
	next()
})
export default router
