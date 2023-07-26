<script setup lang="ts">
import './shopping.scss'
import { useTabBarStore } from '@/store/tabBar'

const bar = useTabBarStore()
</script>

<template>
  <van-sidebar
    :active-key="bar.activeTab"
    @change="bar.onTabChange"
  >
    <van-sidebar-item title="电脑办公" />
    <van-sidebar-item title="手机" />
    <van-sidebar-item title="食品酒饮" />
  </van-sidebar>
</template>
