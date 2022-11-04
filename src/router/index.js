import { createRouter, createWebHistory } from 'vue-router'

const authenticationGuard = (to, from, next) => {
  const data = localStorage.getItem('user')

  if (data != null) {
    return next()
  }
  next('/')
}

const routes = [
  {
    path: '/Userprofile',
    name: 'Userprofile',
    component: () => import('./views/Userprofile.vue'),

    beforeEnter: authenticationGuard,
  },
  {
    path: '/Register',
    component: () => import('./views/Register.vue'),
  },
  {
    path: '/',
    component: () => import('./views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export default router
