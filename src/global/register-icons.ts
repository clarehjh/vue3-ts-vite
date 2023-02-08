/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-08 16:53:35
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-08 17:02:19
 */
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
function registerIcons(app: App<any>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons
