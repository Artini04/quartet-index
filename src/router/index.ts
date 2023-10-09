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
        title: 'Look Up - ポケットカルテット'
      }
    },
    {
      path: '/table',
      name: 'table',
      component: TableView,
      meta: {
        title: 'Table - ポケットカルテット'
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
      path: '/doc',
      name: 'doc',
      component: () => import('@/views/DocumentationView.vue'),
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
