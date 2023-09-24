import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchView,
      meta: {
        title: 'Search - カルテット単語索引'
      }
    },
    // {
    //   path: '/search',
    //   name: 'name',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/SearchView.vue'),
    //   meta: {
    //     title: 'Search - カルテット単語索引'
    //   }
    // },
    {
      path: '/options',
      name: 'options',
      component: () => import('@/views/OptionsView.vue'),
      meta: {
        title: 'Options - カルテット単語索引'
      }
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TableView.vue'),
      meta: {
        title: 'Table - カルテット単語索引'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About - カルテット単語索引'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) ?? 'Index'
  next()
})

export default router
