import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutView.vue'
import StoryView from '@/views/StoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: HomeView
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    }
  ]
})

export default router
