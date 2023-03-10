<script setup lang='ts'>
import { useQuery } from '@tanstack/vue-query'
import type { Post } from './types'
const { postId } = defineProps<{
  postId: number
}>()

defineEmits<{
  (e: 'setPostId', id: number): void
}>()

const fetcher = async (id: number): Promise<Post> =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    response => response.json(),
  )

const { isLoading, data } = useQuery({
  queryKey: ['post', postId],
  queryFn: () => fetcher(postId),
})
</script>

<template>
  <div v-if="isLoading">
    Loading
  </div>
  <div v-if="data" max-w-prose m-auto px-6>
    <h2 text-xl font-bold py-3>
      Post {{ postId }} : {{ data.title }}
    </h2>
    <p text-left>
      {{ data.body }}
    </p>
  </div>
</template>
