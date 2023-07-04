/**
 * 配置全局loading
 */

import { ElLoading } from 'element-plus'

let loadingInstance: ReturnType<typeof ElLoading.service>

/**
 * 开启loading
 */

const startLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: 'loading',
    background: 'rgba(0,0,0.7)'
  })
}

/**
 * 结束loading
 */

const endLoading = () => {
  loadingInstance.close()
}

/**
 * 全屏加载loading
 */

let needLoadingRequestCount = 0
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

/**
 * 隐藏全屏加载
 */

export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
