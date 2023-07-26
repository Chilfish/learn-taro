import { useVant } from '@/vant'

export default definePageConfig({
  navigationBarTitleText: '商品分类',
  usingComponents: {
    ...useVant(
      'sidebar',
      'sidebar-item',
    ),
  },
})
