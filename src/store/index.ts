/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-06-28 13:48:17
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-07-03 14:19:10
 */
/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-03-03 16:17:02
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-07-03 10:56:09
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './modules/login'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

function registerStore(app: App<Element>) {
  // 1.use的pinia

  app.use(pinia)

  // 2.加载本地的数据
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default registerStore
