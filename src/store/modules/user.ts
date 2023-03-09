import { postUsersListData } from '@/service/modules/system'
import { defineStore } from 'pinia'
import type { ISystemState } from '../types/user'

const userStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    async postUsersListAction() {
      const usersListResult = await postUsersListData()
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    }
  }
})

export default userStore
