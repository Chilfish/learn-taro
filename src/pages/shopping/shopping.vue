<script setup lang="ts">
import './shopping.scss'

const tabs = [
  { text: '手机', url: '/shopping/phone' },
  { text: '电脑办公', url: '/shopping/computer' },
  { text: '电视', url: '/shopping/tv' },
]
</script>

<template>
  <!-- <sidebar :tabs="tabs" /> -->
  <GoodsMain />
</template>
