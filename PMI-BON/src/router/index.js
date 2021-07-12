import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Volunteer.vue')
      },
      {
<<<<<<< HEAD
        path: 'login',
        component: () => import('@/views/LoginPage.vue')
=======
        path: 'tab3',
        component: () => import('@/views/Blogs.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Events.vue')
>>>>>>> b9b22c82086e5c7183b5d3e0ac272e429ac83235
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
