<script setup lang="ts">
import { ref } from 'vue'

const showPopup = ref(false)
</script>

<template>
  <van-popup
    :show="showPopup"
    closeable="true"
    round="true"
    position="bottom"
    custom-style="height: 60%"
    @close="showPopup = false"
  >
    <header class="title">
      <slot name="title" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="bottom" />
    </footer>
  </van-popup>
</template>

<style lang="scss">
.van-popup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header.title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem;
  }
}
</style>
