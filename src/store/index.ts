/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-03-03 16:17:02
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-03-09 16:00:13
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './modules/login'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  // 1.use的pinia
  app.use(pinia)

  // 2.加载本地的数据
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default registerStore
