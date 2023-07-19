<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '@/types'

const todos = ref<Todo[]>([
  {
    id: '0',
    content: 'Hello! This is a todo item.',
    completed: false,
  },
  {
    id: '1',
    content: 'Click me to expand!',
    completed: false,
  },
])

definePageConfig({
  navigationBarTitleText: 'Todo',
})
</script>

<template>
  <main>
    <template v-for="todo in todos" :key="todo.id">
      <TodoItem
        :item="todo"
        @toggle="todo.completed = !todo.completed"
      />
    </template>
  </main>
</template>

<style lang="scss">
main {

}
</style>
