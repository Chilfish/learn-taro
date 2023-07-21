<script setup lang="ts">

</script>

<template>
  <van-cell-group inset>
    <van-cell
      is-link
      title="Todo List"
      icon="label-o"
      link-type="navigateTo"
      url="/pages/todo/todo"
    />

    <van-cell
      is-link
      title="Search Github Repositories"
      icon="label-o"
      link-type="navigateTo"
      url="/pages/github/github"
    />
  </van-cell-group>

  <tab-bar />
</template>
