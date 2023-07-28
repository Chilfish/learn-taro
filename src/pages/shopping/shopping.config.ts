import { useVant } from '@/vant'

export default definePageConfig({
  navigationBarTitleText: '商品分类',
  usingComponents: {
    ...useVant(
      'card',
      'sidebar',
      'sidebar-item',
      'goods-action',
      'goods-action-button',
      'goods-action-icon',
    ),
  },
})
