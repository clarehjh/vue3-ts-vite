/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-07 10:58:36
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-03-09 15:22:24
 */
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/localCache'
import { firstMenu } from '@/utils/mapMenus'
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
      name: 'main',
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

  if (to.path === '/main') {
    console.log(firstMenu)
    return firstMenu?.url
  }
})

export default router
