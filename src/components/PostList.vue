<script setup lang='ts'>
import { useQuery } from '@tanstack/vue-query'
import type { Post } from './types'

const { isVisited } = defineProps<{
  isVisited: (id: number) => boolean
}>()

defineEmits<{
  (e: 'setPostId', id: number): void
}>()

const fetcher = async (): Promise<Post[]> =>
  await fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json(),
  )

const { isLoading, data } = useQuery({
  queryKey: ['posts'],
  queryFn: fetcher,
})
</script>

<template>
  <h1 text-left font-bold text-2xl>
    Posts
  </h1>
  <div v-if="isLoading">
    Loading...
  </div>
  <ul v-if="data" text-left>
    <li v-for="{ id, title } in data" :key="id">
      <a href="#" hover:text-teal-600 :class="{ visited: isVisited(id) }" @click="$emit('setPostId', id)">{{ title }}</a>
    </li>
  </ul>
</template>

<style scoped>
.visited {
  font-weight: bold;
  color: green;
}
</style>
