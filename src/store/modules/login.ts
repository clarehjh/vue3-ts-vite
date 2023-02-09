/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-09 14:00:38
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-09 14:49:30
 */
import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { accountLogin } from '@/service'
import { localCache } from '@/utils/localCache'
import router from '@/router'

const LOGIN_TOKEN = 'token'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: localCache.get(LOGIN_TOKEN) ?? ''
  }),

  getters: {},
  actions: {
    async loginAccount(account: IAccount) {
      const loginResult = await accountLogin(account)
      this.id = loginResult.data.id
      this.name = loginResult.data.name
      this.token = loginResult.data.token
      localCache.set(LOGIN_TOKEN, this.token)

      router.push('/main')
    }
  }
})

export default useLoginStore
