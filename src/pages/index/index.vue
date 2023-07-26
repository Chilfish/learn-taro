<script setup lang="ts">
const links = [
  {
    title: 'Todo List',
    icon: 'label-o',
    url: '/pages/todo/todo',
  },
  {
    title: 'Search Github Repositories',
    icon: 'label-o',
    url: '/pages/github/github',
  },
  {
    title: 'Shopping',
    icon: 'cart-o',
    url: '/pages/shopping/shopping',
  },
]
</script>

<template>
  <van-cell-group inset>
    <van-cell
      v-for="link in links"
      :key="link.url"
      :title="link.title"
      :icon="link.icon"
      :url="link.url"
      is-link
      link-type="navigateTo"
    />
  </van-cell-group>
  <tab-bar />
</template>
