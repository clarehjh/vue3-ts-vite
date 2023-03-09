import HRequest from '../request'

/** 用户的网络请求 */
export function postUsersListData() {
  return HRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
