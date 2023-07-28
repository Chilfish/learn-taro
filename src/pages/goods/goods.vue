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

    <div id="goods-main">
      <h1 id="price">
        ￥{{ goods?.price }}
      </h1>
      <h3 id="name">
        {{ goods?.name }}
      </h3>

      <van-cell-group>
        <van-cell
          title="已选
         " value="6+128"
        >
          <van-icon slot="right-icon" name="ellipsis" class="custom-icon" />
        </van-cell>
        <van-cell
          title="送至"
          value="北京市海淀区翻斗大街翻斗花园二号楼1001室"
          class="van-multi-ellipsis--l1s"
        >
          <van-icon slot="right-icon" name="ellipsis" class="custom-icon" />
        </van-cell>
      </van-cell-group>

      <div>评论区</div>
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

#goods-main {
  height: 100%;
  overflow-y: auto;
  padding: 0.5rem;

  #price {
    color: #F2270C;
    margin-bottom: 0.5rem;
  }
  #name {
    font-size: 1.3rem;
  }
}
</style>
