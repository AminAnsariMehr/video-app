import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./../layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'movies',
          name: 'movies',
          component: () => import('@/views/movies/MoviesView.vue')
        },
        {
          path: 'series',
          name: 'series',
          component: () => import('@/views/series/SeriesView.vue')
        },
        {
          path: 'app',
          name: 'app',
          component: () => import('@/views/app/AppDownload.vue')
        }
      ]
    },

    {
      path: '/auth',
      name: 'auth',
      component: () => import('./../layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/auth/RegisterView.vue')
        },
        {
          path: 'recovery-password',
          name: 'recovery-password',
          component: () => import('@/views/auth/RecoveryPasswordView.vue')
        }
      ]
    },

    {
      path: '/error',
      name: 'error',
      component: () => import('./../layouts/BlankLayout.vue'),
      children: [
        {
          path: '404',
          name: 'not-found',
          component: () => import('@/views/errors/NotFoundView.vue')
        }
      ]
    }
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: 'exactActive'
})

export default router
