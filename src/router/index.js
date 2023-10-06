import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../Views/Home.vue')
  },
  {
    path: '/filmes',
    name: 'Movies',
    component: () => import('../Views/MoviesView.vue')
  },
  {
    path: '/tv',
    name: 'TV',
    component: () => import('../Views/TvView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
