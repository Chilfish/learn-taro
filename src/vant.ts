import type { vantComponentsName } from './types/vant'

/**
 * vant weapp component path
 * @param name component name(s)
 * @returns `{ van-name: vant/name/index }`
 */
export function useVant(...name: vantComponentsName[]) {
  const obj: Record<string, string> = {}
  name.forEach((item) => {
    obj[`van-${item}`] = `@vant/weapp/${item}/index`
  })
  return obj
}
