<script setup lang="ts">
import { useImage } from '@vueuse/core'
import { computed } from 'vue'
import type { GithubRepo } from '@/types'

const repo = defineProps<{
  item: GithubRepo
}>()

const { isLoading } = useImage({ src: repo.item.owner.avatar_url })
const avatarUrl = computed(() =>
  isLoading.value
    ? '/assets/placeHolder.gif'
    : repo.item.owner.avatar_url,
)
</script>

<template>
  <a :href="item.html_url" target="_blank" rel="noopener noreferrer" class="github-card">
    <img :src="avatarUrl" alt="avatar" class="avatar">
    <div>
      <p class="title"> {{ item.full_name }}</p>
      <p
        v-if="item.description"
        class="description"
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
  }

  .avatar {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 0.75rem;
    margin-right: 1rem;
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
