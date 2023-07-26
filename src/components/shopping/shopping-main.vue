<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const name = ref(route.params.name)

watch(
  () => route.params.name,
  (newName) => {
    name.value = newName
  },
)
</script>

<template>
  <h1>{{ name }}</h1>
</template>
