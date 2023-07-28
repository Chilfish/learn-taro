<script setup lang="ts">
const tabs = [
  { text: '手机', url: '/goods/category/phone' },
  { text: '电脑办公', url: '/goods/category/computer' },
  { text: '电视', url: '/goods/category/tv' },
]
</script>

<template>
  <sidebar :tabs="tabs" />
</template>
