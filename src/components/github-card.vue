<script setup lang="ts">
import type { GithubRepo } from '@/types'

defineProps<{
  item: GithubRepo
}>()
</script>

<template>
  <a
    :href="item.html_url"
    target="_blank"
    rel="noopener noreferrer"
    class="github-card"
  >
    <van-image
      :src="item.owner.avatar_url"
      fix="cover"
      alt="avatar"
      class="avatar"
      width="3rem"
      height="3rem"
      radius="0.75rem"
      lazy-load
      use-loading-slot
    >
      <van-loading slot="loading" type="spinner" size="20" vertical />
    </van-image>

    <div>
      <p class="title"> {{ item.full_name }}</p>
      <p
        v-if="item.description"
        class="description van-multi-ellipsis--l2"
      >
        {{ item.description }}
      </p>

      <div class="info">
        <div>
          <van-icon name="star-o" />
          <span>{{ item.stargazers_count }}</span>
        </div>
        <div>
          <van-icon name="cluster-o" />
          <span> {{ item.forks_count }}</span>
        </div>
        <div>
          <van-icon name="info-o" />
          <span>{{ item.open_issues }}</span>
        </div>
        <div v-if="item.language">{{ item.language }}</div>
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.github-card {
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  padding: 0.5rem;
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
  background-color: #f5f5f5;

  &>div {
    display: flex;
    flex-direction: column;
    max-width: 85%;
  }

 .van-image {
    margin-right: 0.5rem;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    overflow-wrap: anywhere;
    text-align: start;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    letter-spacing: 0.025em;
  }

  .description {
    overflow-x: auto;
    text-align: start;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0;
  }

  .info {
    margin-top: 0.5rem;
    display: flex;
    font-size: 0.875rem;
    line-height: 1.25rem
  }

  .info>div {
    align-items: center;
    margin-right: 1.5rem;
    display: flex;
  }

  van-icon {
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.25rem;
  }
}
</style>
