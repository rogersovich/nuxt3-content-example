<script setup lang="ts"></script>
<template>
  <div class="w-full fcb px-[5%] lg:px-[15%] py-6">
    <NuxtLink to="/">
      <div class="text-3xl font-bold">
        Nuxt <span class="rainbow-text">Content</span>
      </div>
    </NuxtLink>
    <div class="fcc gap-4">
      <NuxtLink to="/blogs" class="hover:border-b-2 border-primary">
        Blogs
      </NuxtLink>
      <NuxtLink to="/blogs" class="hover:border-b-2 border-primary">
        Documentation
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
