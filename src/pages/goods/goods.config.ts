import { useVant } from '@/vant'

export default definePageConfig({
  navigationBarTitleText: '商品详情',
  usingComponents: {
    ...useVant(
      'goods-action',
      'goods-action-button',
      'goods-action-icon',
    ),
  },
})
