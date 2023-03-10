<script setup lang="ts" generic="T extends any, O extends any">
const router = useRouter()
const visitedPosts = ref(new Set())
const isVisited = (id: number) => visitedPosts.value.has(id)
const setPostId = (id: number) => {
  visitedPosts.value.add(id)
  router.push(`/posts/${encodeURIComponent(id)}`)
}
</script>

<template>
  <div max-w-prose m-auto px-6>
    <PostList :is-visited="isVisited" @setPostId="setPostId" />
  </div>
</template>
