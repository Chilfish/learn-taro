<script setup lang="ts">
</script>

<template>
  <c-popup>
    <template #main>
      <p>add</p>
    </template>

    <template #bottom>
      <van-goods-action>
        <van-goods-action-icon
          icon="cart-o"
          text="加入购物车"
        />
        <van-goods-action-button
          text="立即购买"
          color="#E02E24"
        />
      </van-goods-action>
    </template>
  </c-popup>
</template>

<style lang="scss">
.van-popup {
  .van-goods-action {
    margin: 0 1rem;
  }
}
</style>
