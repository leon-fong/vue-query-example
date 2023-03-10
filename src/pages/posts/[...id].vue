<script setup lang='ts'>
const props = defineProps<{ id: string }>()
const postId = computed(() => Number(unref(props.id)))
</script>

<template>
  <Post :post-id="postId" />
</template>
