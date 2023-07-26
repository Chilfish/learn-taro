<script setup lang="ts">
import type { Tab } from '@/types'
import { useTabBarStore } from '@/store/tabBar'

defineProps<{
  tabs: Tab[]
}>()

const tab = useTabBarStore()
</script>

<template>
  <div class="main">
    <aside>
      <van-sidebar
        :active-key="tab.activeTab"
        @change="tab.onTabChange"
      >
        <template
          v-for="item in tabs"
          :key="item.url"
        >
          <router-link :to="item.url">
            <van-sidebar-item :title="item.text" />
          </router-link>
        </template>
      </van-sidebar>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
div.main {
  display: flex;
  height: 100%;

  .van-sidebar {
    height: 100%;
  }

  main {
    padding: 0.8rem;
    width: 100%;
  }
}
</style>
