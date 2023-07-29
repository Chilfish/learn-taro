<script setup lang="ts">
import { inject } from 'vue'

const showPopup = inject('showPopup') as {
  show: boolean
}
</script>

<template>
  <van-popup
    :show="showPopup.show"
    closeable="true"
    round="true"
    position="bottom"
    custom-style="height: 60%"
    @close="showPopup.show = false"
  >
    <header>
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
  padding: 0 0.5rem;

  header {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }

  footer {
    margin: 0 0.5rem;
  }
}
</style>
