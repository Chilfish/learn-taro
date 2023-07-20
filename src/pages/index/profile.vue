<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()
</script>

<template>
  <main>
    <h1>Profile</h1>
    <p>Count: {{ counter.count }}</p>
    <van-button
      type="primary"
      @click="counter.increment"
    >
      Increment
    </van-button>
  </main>
</template>
