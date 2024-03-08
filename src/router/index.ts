import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/options',
            name: 'options',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/OptionsView.vue'),
            meta: {
                title: 'Options'
            }
        },
        {
            path: '/:pathMatch(.*)',
            name: 'pageNotFound',
            component: () => import('@/views/404View.vue'),
            meta: {
                title: 'Page Not Found'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title as string) ?? ''
    next()
})

export default router
