<script setup lang="ts">

</script>
<template>
  <div
    class="dark:bg-[#18181b] dark:text-white bg-white text-[#0c0c0c] min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] py-10"
  >
    <NavigationBar />
    <div class="px-6 pt-10">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
