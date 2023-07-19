<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Todo } from '@/types'

const prop = defineProps<{
  item: Todo
}>()

defineEmits([
  'toggle',
  'delete',
])

const isExpanded = ref(false)

const contentStyle = computed(_ => ({
  'todo-completed': prop.item.completed,
  'truncate': !isExpanded.value,
}))
</script>

<template>
  <div class="todo-item" :class="{ 'h-auto': isExpanded }">
    <label>
      <input
        type="checkbox" :checked="item.completed"
        @click="$emit('toggle', item.id)"
      >
    </label>
    <p
      class="todo-content" :class="contentStyle"
      @click="isExpanded = !isExpanded"
    >
      {{ item.content }}
    </p>
    <!-- <span
      class="i-carbon-trash-can h-6 w-6 cursor-pointer color-red opacity-40 hover:opacity-100"
      @click="$emit('delete', item.id)"
    /> -->
  </div>
</template>

<style lang="scss">
.todo-item {
  margin: 0.5rem;
  height: 2rem;
  width: 90%;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  background-color: #d5d5d5;
  padding: 1rem;
  text-align: center;
  line-height: 2rem;
}

.todo-content {
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow-x: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: start;
}

.todo-completed {
  text-decoration-line: line-through;
}
</style>
