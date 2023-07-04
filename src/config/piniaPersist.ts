import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

/**
 * pinia浏览器持久化配置
 */

const piniaPersistConfig = (key: string, paths?: string[]) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    paths
  }
  return persist
}

export default piniaPersistConfig
