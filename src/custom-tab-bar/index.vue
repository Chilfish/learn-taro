<script setup lang="ts">
import type { TabBar } from '@/types'
import { useTabBarStore } from '@/store/tabBar'

const useTabBar = useTabBarStore()

const items: TabBar[] = [
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
    url: '/pages/index/profile',
  },
]
</script>

<template>
  <van-tabbar
    :active="useTabBar.activeTab"
    @change="useTabBar.onTabChange"
  >
    <van-tabbar-item
      v-for="item in items"
      :key="item.name"
      :icon="item.icon"
      :name="item.name"
      :url="item.url"
      link-type="switchTab"
    >
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>
