/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-03-09 16:40:58
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-07-03 11:40:58
 */
export interface IUser {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface ISystemState {
  usersList: IUser[]
  usersTotalCount: number
  entireRoles: any[]
  entireDepartments: any[]
  pageList: any[]
  pageTotalCount: number
}
