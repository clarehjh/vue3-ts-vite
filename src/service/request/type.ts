/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-08 22:02:47
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-12 15:32:26
 */
// 针对AxiosRequestConfig配置进行扩展
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface newInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => InternalAxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailFn?: (err: any) => any
}

export interface newRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: newInterceptors<T>
}
