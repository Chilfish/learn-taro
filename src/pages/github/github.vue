<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs'
import { filter, map, switchMap, tap } from 'rxjs/operators'
import { GithubService } from '@/services/githubService'
import type { GithubRepo, reqState } from '@/types'

const repos = ref([] as GithubRepo[])
const searchInput = ref<HTMLInputElement | null>(null)
const repoStatus = ref<reqState>('idle')

const githubService = new GithubService()

const statusText = computed(() => {
  switch (repoStatus.value) {
    case 'loading':
      return 'Loading...'
    case 'notFound':
      return 'Not Found'
    case 'error':
      return 'Error'
    default:
      return ''
  }
})

// wait for the searchInput to be mounted
onMounted(() => {
  fromEvent(searchInput.value!, 'input')
    .pipe(
      map(e => (e.target as HTMLInputElement).value.trim()),
      tap((val) => {
        if (val.length === 0)
          repoStatus.value = 'idle'
      }),
      filter(val => val.length !== 0),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val: string) => {
        repoStatus.value = 'loading'
        return githubService.getRepos(val)
      }),
    ).subscribe({
      next: (data) => {
        repoStatus.value = data.length === 0 ? 'notFound' : 'success'
        repos.value = data
      },
      error: (error) => {
        console.error(error.message)
        repoStatus.value = 'error'
      },
    })
})
</script>

<template>
  <main id="github">
    <h3>Search Github Repositories</h3>

    <label class="w-full">
      <input ref="searchInput" placeholder="repo name" type="search" class="github-search">
    </label>
    <section class="my-2xl w-full">
      <template v-if="repoStatus === 'success'">
        <GithubCard v-for="repo in repos" :key="repo.id" :item="repo" />
      </template>

      <p v-else class="statusText">
        {{ statusText }}
      </p>
    </section>
  </main>
</template>

<style lang="scss">
#github {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  padding: 0.5rem;
  margin: 0 auto;
}

.w-full {
  width: 100%;
}

.github-search {
  width: 90%;
  border-radius: 0.75rem;
  padding: 0.5rem;
  padding-left: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #f5f5f5;
}

.statusText {
  -webkit-user-select: none;
  user-select: none;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}
</style>
