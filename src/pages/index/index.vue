<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello world')
</script>

<template>
  <view class="index">
    <van-button type="primary">
      {{ msg }}
    </van-button>
  </view>
</template>
