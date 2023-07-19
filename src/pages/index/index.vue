<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello world')
</script>

<template>
  <p>Hello</p>
  <hello :msg="msg" />
</template>
