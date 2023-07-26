import { useVant } from '@/vant'

export default definePageConfig({
  navigationBarTitleText: '搜索 GIthub 仓库',
  usingComponents: {
    ...useVant(
      'image',
      'loading',
    ),
  },
})
