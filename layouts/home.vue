<script setup lang="ts"></script>
<template>
  <div
    class="dark:bg-[#18181b] dark:text-white bg-white text-[#0c0c0c] min-h-screen"
  >
    <NavigationBar />
    <div class="px-6">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
