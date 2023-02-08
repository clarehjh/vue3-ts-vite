import HRequest from '../request'
import type { IAccount } from '@/types'

export function accountLoginRequest(account: IAccount) {
  return HRequest.post({
    url: '/login',
    data: account
  })
}
