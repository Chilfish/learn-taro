<script setup lang="ts">
defineProps<{
  imgs?: string[]
}>()
</script>

<template>
  <div>
    <swiper
      class="swiper"
      indicator-dots="true"
      circular="true"
    >
      <block v-for="(item, index) in imgs" :key="index">
        <swiper-item>
          <van-image
            :src="item"
            width="100%"
            height="100%"
            fit="cover"
            mode="aspectFill"
            lazy-load
          />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<style lang="scss">
.swiper {
  height: 20rem;
}
</style>
