import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lookup',
      component: SearchView,
      meta: {
        title: 'Look Up - ポケットカルテット'
      }
    },
    {
      path: '/options',
      name: 'options',
      component: () => import('@/views/OptionsView.vue'),
      meta: {
        title: 'Options - ポケットカルテット'
      }
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TableView.vue'),
      meta: {
        title: 'Table - ポケットカルテット'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About - ポケットカルテット'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) ?? 'Index'
  next()
})

export default router
