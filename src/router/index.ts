import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import TableView from '@/views/TableView.vue'
import OptionsView from '@/views/OptionsView.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - トカ',
      },
    },
    {
      path: '/lookup/normal',
      name: 'lookup-normal',
      component: SearchView,
      meta: {
        title: 'Look Up - トカ',
      },
    },
    {
      path: '/lookup/table',
      name: 'lookup-table',
      component: TableView,
      meta: {
        title: 'Table - トカ',
      },
    },
    {
      path: '/options',
      name: 'options',
      component: OptionsView,
      meta: {
        title: 'Options - トカ',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About - トカ',
      },
    },
    {
      path: '/:pathMatch(.*)',
      name: '404 - トカ',
      component: () => import('@/views/PageNotFound.vue'),
      // redirect: '/'
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) ?? 'Index'
  next()
})

export default router
