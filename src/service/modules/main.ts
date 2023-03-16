import HRequest from '../request'

export function getEntireRoles() {
  return HRequest.post({
    url: '/role/list'
  })
}

export function getEntireDepartments() {
  return HRequest.post({
    url: '/department/list'
  })
}
