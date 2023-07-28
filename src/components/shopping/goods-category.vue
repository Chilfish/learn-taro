<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Taro from '@tarojs/taro'
import { fakeGoods } from '@/mock/goods'

const category = computed(_ => useRoute().params.category)

const goodsArr = computed(_ => fakeGoods.filter(item => item.category === category.value))
</script>

<template>
  <div
    v-for="goods in goodsArr"
    :key="goods.id"
    @click=" Taro.navigateTo({
      url: `/pages/shopping/goods-detail?id=${goods.id}`,
    })"
  >
    <van-card
      :price="goods.price"
      :desc="goods.description"
      :title="goods.name"
      :thumb="goods.cover_url"
    />
  </div>
</template>

<style lang="scss">
.van-card {
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  background-color: #F6F6F6 !important;
}
</style>
