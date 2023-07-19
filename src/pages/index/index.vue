<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello world')
</script>

<template>
  <div>
    <van-button type="primary">
      {{ msg }}
    </van-button>
    <hello />

    <p>233</p>
  </div>
</template>
