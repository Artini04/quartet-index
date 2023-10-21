import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import TableView from '@/views/TableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lookup',
      component: SearchView,
      meta: {
        title: 'Look Up - トカ'
      }
    },
    {
      path: '/table',
      name: 'table',
      component: TableView,
      meta: {
        title: 'Table - トカ'
      }
    },
    {
      path: '/options',
      name: 'options',
      component: () => import('@/views/OptionsView.vue'),
      meta: {
        title: 'Options - トカ'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About - トカ'
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: '404 - トカ',
      component: () => import('@/views/PageNotFound.vue')
      // redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) ?? 'Index'
  next()
})

export default router
