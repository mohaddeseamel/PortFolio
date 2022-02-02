import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import projects from '../views/projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/projects/:id',
    name:'projects',
    component: projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
