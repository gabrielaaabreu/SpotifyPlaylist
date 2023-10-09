import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'
import PlaylistsPage from '../views/PlaylistsPage.vue'
import PlaylistDetailPage from '../views/PlaylistDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/webplayer',
      name: 'webplayer',
      component: PlaylistsPage
    },
    {
      path: '/playlistdetail',
      name: 'playlistdetail',
      component: PlaylistDetailPage
    }
  ]
})

export default router
