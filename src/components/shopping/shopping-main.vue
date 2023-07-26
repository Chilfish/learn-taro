<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fakeGoods } from '@/mock/goods'

const route = useRoute()

const category = ref(route.params.category)

watch(
  () => route.params.category,
  (newCategory) => {
    category.value = newCategory
  },
)

const data = ref(fakeGoods)
const goodsArr = computed(_ => data.value.filter(item => item.category === category.value))
</script>

<template>
  <div
    v-for="goods in goodsArr"
    :key="goods.id"
  >
    <van-card
      :price="goods.price"
      :desc="goods.description"
      :title="goods.name"
      :thumb="goods.cover_url"
    />
  </div>
</template>
