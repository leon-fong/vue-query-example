<script setup lang='ts'>
</script>

<template>
  <nav class="w-full flex relative justify-between items-center mx-auto px-6 h-20">
    <!-- logo -->
    <div class="inline-flex">
      <RouterLink to="/">
        <div flex justify-center items-center gap-2 font-bold text-xl>
          <span i-carbon-search-locate />
          <span>Vue query <sup opacity-55>TanStack</sup></span>
        </div>
      </RouterLink>
    </div>

    <!-- end logo -->

    <!-- menu -->
    <div class="flex-initial">
      <div class="flex justify-center items-center">
        <div text-xl mt-6 inline-flex gap-2 text-center m-auto>
          <button icon-btn @click="toggleDark()">
            <div dark:i-carbon-moon i-carbon-sun />
          </button>

          <a
            icon-btn i-carbon-logo-github
            rel="noreferrer"
            href="https://github.com/leon-fong/vue-query-example"
            target="_blank"
            title="GitHub"
          />
        </div>
      </div>
    </div>
    <!-- end menu -->
  </nav>
</template>

<style scoped>

</style>
