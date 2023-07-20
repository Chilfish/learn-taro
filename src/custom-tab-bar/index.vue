<script setup lang="ts">
import { useTabBarStore } from '@/store/tabBar'
import { TabBarList } from '@/router'

const useTabBar = useTabBarStore()
</script>

<template>
  <van-tabbar
    :active="useTabBar.activeTab"
    @change="useTabBar.onTabChange"
  >
    <van-tabbar-item
      v-for="item in TabBarList"
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
