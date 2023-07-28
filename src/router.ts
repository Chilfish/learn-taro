import type { RouteRecordRaw } from 'vue-router'
import type { TabBar } from './types/index'

export const TabBarList: TabBar[] = [
  {
    name: 'home',
    text: '首页',
    icon: 'home-o',
    url: '/pages/index/index',
  },
  {
    name: 'profile',
    text: '我的',
    icon: 'user-o',
    url: '/pages/profile/profile',
  },
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/goods/category/:category',
    component: () => import('@/components/shopping/goods-category.vue'),
  },
]
