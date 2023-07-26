<script setup lang="ts">
import './shopping.scss'
import { ref } from 'vue'

const tabs = ref([
  { text: '手机', url: '/shopping/phone' },
  { text: '电脑办公', url: '/shopping/computer' },
  { text: '食品酒饮', url: '/shopping/food' },
])
</script>

<template>
  <sidebar :tabs="tabs" />
</template>
