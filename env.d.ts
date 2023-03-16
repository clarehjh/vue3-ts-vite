/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-06 16:11:28
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-06 16:36:25
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
