<script setup lang="ts">
const route = useRoute()

const blog = await queryContent("blogs").where({ _path: `${route.path}` }).findOne()

useHead({
  title: blog.title,
})
</script>
<template>
  <div class="w-full pt-10">
    <ClientOnly>
      <ContentRenderer :value="blog" />
    </ClientOnly>
  </div>
</template>

<style scoped></style>
