<script setup lang="ts">
import { computed } from 'vue'
import { fakeGoods } from '@/mock/goods'
import { useInstanceStore } from '@/store/instance'

const id = useInstanceStore().instance.router?.params.id ?? '-1'

const goods = computed(_ => fakeGoods.find(item => item.id === id) || null)

function onClickIcon(event: any) {
  console.log(event)
}

function onClickButton(event: any) {
  console.log(event)
}
</script>

<template>
  <main class="goods-detail">
    <van-swiper :imgs="goods?.imgs" />

    <div>
      <h2>{{ goods?.name }}</h2>
    </div>

    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
      />
      <van-goods-action-button
        text="加入购物车"
        color="#FFB21B"
        @click="onClickButton"
      />
      <van-goods-action-button
        text="立即购买"
        color="#E02E24"
        @click="onClickButton"
      />
    </van-goods-action>
  </main>
</template>

<style lang="scss">
main.goods-detail {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
