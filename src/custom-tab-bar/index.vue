<script setup lang="ts">
import { ref } from 'vue'
import type { TabBar } from '@/types'

const items = ref<TabBar[]>([
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
])

const activeTab = ref('home')

function onTabChange(event) {
  console.log(event)
  activeTab.value = event.detail
}
</script>

<template>
  <van-tabbar :active="activeTab" @change="onTabChange">
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
