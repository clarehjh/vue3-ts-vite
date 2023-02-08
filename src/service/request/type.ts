// 针对AxiosRequestConfig配置进行扩展
import type{ AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface newInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn: (res: T) => T
  responseFailFn?: (err: any) => any
}

export interface newRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: newInterceptors<T>
}
