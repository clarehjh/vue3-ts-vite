enum CacheType {
  local,
  session
}

class Cache {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage
  }
  set(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }
  get(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  clear() {
    this.storage.clear()
  }

  remove(key: string) {
    this.storage.removeItem(key)
  }
}

const localCache = new Cache(CacheType.local)
const sessionCache = new Cache(CacheType.session)
export { localCache, sessionCache }
