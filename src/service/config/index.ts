/*
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-07 11:45:57
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-06-27 17:06:47
 */
// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

let BASE_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  // 开发环境
  BASE_URL = 'https://www.fastmock.site/mock/56abcfccf5befa04922f08450a903bf5/api'
}

// console.log(BASE_URL)

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export { BASE_URL }
