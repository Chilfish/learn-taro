import { useVant } from '@/vant'

export default definePageConfig({
  navigationBarTitleText: '商品分类',
  usingComponents: {
    ...useVant(
      'col',
      'row',
      'sidebar',
      'sidebar-item',
    ),
  },
})
