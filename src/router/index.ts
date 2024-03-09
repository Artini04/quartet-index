import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OptionsView from '../views/OptionsView.vue'

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
            component: OptionsView,
            meta: {
                title: 'Options'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
            meta: {
                title: 'About'
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
