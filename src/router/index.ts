/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-07 10:58:36
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-07 11:29:17
 */
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/localCache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/not-found.vue')
    }
  ]
})
router.beforeEach((to) => {
  const token = localCache.get(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login '
  }
})

export default router
