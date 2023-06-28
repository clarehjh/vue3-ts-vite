/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-11 15:19:24
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-06-27 17:08:51
 */
import HRequest from '../request'
import type { IAccount } from '@/types'

export function accountLogin(account: IAccount) {
  return HRequest.post({
    url: '/api/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return HRequest.get({
    url: `/users/${id}`
  })
}

export function getUserMenusByRoleId(id: number) {
  return HRequest.get({
    url: `/role/${id}/menu`
  })
}
