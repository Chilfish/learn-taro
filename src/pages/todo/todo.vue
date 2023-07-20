<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '@/types'

const todos = ref<Todo[]>([
  { id: '0', content: 'Hello! This is a todo item.', completed: false },
  { id: '1', content: 'Click me to expand!Click me to expand!\nClick me to expand!', completed: false },
])
const newTodo = ref('')

function addTodo() {
  const content = newTodo.value.trim()
  if (content === '')
    return
  todos.value.push({
    id: Date.now().toString(),
    content,
    completed: false,
  })
  newTodo.value = ''
}
</script>

<template>
  <main>
    <h2> Chill Todo List </h2>
    <van-field
      :value="newTodo"
      center
      clearable
      placeholder="Add a new Todo"
      use-button-slot
      class="add-todo"
      @confirm="addTodo"
      @input="(value) => newTodo = value.detail"
    >
      <!-- ↑：vant weapp + Vue 的双向绑定好像得手动绑定事件 -->
      <van-button
        slot="button"
        size="small"
        type="primary"
        @click="addTodo"
      >
        添加
      </van-button>
    </van-field>

    <template v-for="todo in todos" :key="todo.id">
      <todo-item
        :item="todo"
        @toggle="todo.completed = !todo.completed"
        @delete="todos.splice(todos.indexOf(todo), 1)"
      />
    </template>
  </main>
</template>

<style lang="scss">
main {
  background-color: #F2F3F6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
}

.add-todo {
  width: 100%;
  margin-bottom: 0.8rem;
}
</style>
