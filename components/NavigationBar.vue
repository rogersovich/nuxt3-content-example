<script setup lang="ts">
const { x, y } = useWindowScroll()
const active = ref(true)
</script>
<template>
  <div
    :class="
      cn('nav-app', {
        'border-b-2': y > 10,
      })
    "
  >
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
