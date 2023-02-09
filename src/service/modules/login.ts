import HRequest from '../request'
import type { IAccount } from '@/types'

export function accountLogin(account: IAccount) {
  return HRequest.post({
    url: '/login',
    data: account
  })
}
