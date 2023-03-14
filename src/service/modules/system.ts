/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-03-09 16:35:43
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-03-14 16:00:38
 */
import HRequest from '../request'

/** 用户的网络请求 */
export function postUsersListData(queryInfo: any) {
  return HRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
export function deleteUserById(id: number) {
  return HRequest.delete({
    url: `/users/${id}`
  })
}

export function newUserData(userInfo: any) {
  return HRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: any) {
  return HRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

/** 针对页面的网络请求: 增删改查 */
export function postPageListData(pageName: string, queryInfo: any) {
  return HRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return HRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, pageInfo: any) {
  return HRequest.post({
    url: `/${pageName}`,
    data: pageInfo
  })
}

export function editPageData(pageName: string, id: number, pageInfo: any) {
  return HRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
