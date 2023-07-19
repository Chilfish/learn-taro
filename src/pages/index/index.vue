<script setup lang="ts">
import Taro from '@tarojs/taro'
</script>

<template>
  <main>
    <van-button
      type="primary"
      @click="() => {
        Taro.navigateTo({
          url: '/packages/todo/todo',
        })
      }"
    >
      Todos
    </van-button>
  </main>
</template>
