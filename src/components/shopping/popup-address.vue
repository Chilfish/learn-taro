<script setup lang="ts">
</script>

<template>
  <c-popup>
    <template #title>
      <p>配送至</p>
    </template>

    <template #main>
      <van-cell-group>
        <van-cell
          title="北京市海淀区翻斗大街翻斗花园二号楼1001室"
          class="van-multi-ellipsis--l1s"
        />
        <van-cell
          title="北京市海淀区翻斗大街翻斗花园二号楼1001室"
          class="van-multi-ellipsis--l1s"
        />
        <van-cell
          title="北京市海淀区翻斗大街翻斗花园二号楼1001室"
          class="van-multi-ellipsis--l1s"
        />
      </van-cell-group>
    </template>

    <template #bottom>
      <van-button
        block="true"
        round="true"
        color="#F2320C"
      >
        选择其他地址
      </van-button>
    </template>
  </c-popup>
</template>
