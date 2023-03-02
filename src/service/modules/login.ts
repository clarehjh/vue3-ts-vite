/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-11 15:19:24
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-11 17:55:40
 */
import HRequest from '../request'
import type { IAccount } from '@/types'

export function accountLogin(account: IAccount) {
  return HRequest.post({
    url: '/login',
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
