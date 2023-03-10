<template>
  <main font-sans text="center gray-700 dark:gray-200" min-h-screen grid class="grid-rows-[1fr_auto]">
    <keep-live>
      <Header />
      <RouterView />
    </keep-live>
    <TheFooter />
  </main>
</template>
