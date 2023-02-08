/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-07 10:58:36
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-07 11:29:17
 */
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

export default router
