import type { vantComponentsName } from './types/vant'

/**
 * vant weapp component path
 * @param name component name(s)
 */
function vant(...name: vantComponentsName[]) {
  const obj: Record<string, string> = {}
  name.forEach((item) => {
    obj[`van-${item}`] = `/vant/${item}/index`
  })
  return obj
}

export const vantComponents = vant(
  'tabbar',
  'tabbar-item',
  'cell',
  'cell-group',
  'field',
  'icon',
  'button',
  'checkbox',
)
