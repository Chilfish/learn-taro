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
    <van-checkbox
      :value="item.completed"
      @change="$emit('toggle', item.id)"
    />
    <p
      class="todo-content" :class="contentStyle"
      @click="isExpanded = !isExpanded"
    >
      {{ item.content }}
    </p>
    <van-icon
      name="delete-o"
      @click="$emit('delete', item.id)"
    />
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
  background-color: #ffffff;
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

.h-auto {
  height: auto;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
