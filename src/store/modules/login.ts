/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-09 14:00:38
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-12 15:22:45
 */
import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { accountLogin, getUserInfoById, getUserMenusByRoleId } from '@/service'
import { localCache } from '@/utils/localCache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    userInfo: localCache.get('userInfo') ?? {},
    token: localCache.get(LOGIN_TOKEN) ?? '',
    userMenus: localCache.get('userMenus') ?? []
  }),

  getters: {},
  actions: {
    async loginAccount(account: IAccount) {
      const loginResult = await accountLogin(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      localCache.set(LOGIN_TOKEN, this.token)

      //获取用户信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      // 3.根据角色请求用户的权限(菜单menus)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.set('userInfo', userInfo)
      localCache.set('userMenus', userMenus)

      router.push('/main')
    }
  }
})

export default useLoginStore
