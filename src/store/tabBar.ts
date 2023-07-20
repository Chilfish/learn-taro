import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabBarStore = defineStore('tabBar', () => {
  const activeTab = ref('home')

  function onTabChange(event: { detail: string }) {
    activeTab.value = event.detail
  }

  return {
    activeTab,
    onTabChange,
  }
})
