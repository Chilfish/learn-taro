<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h1>Profile</h1>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">
      Increment
    </button>
  </div>
</template>
