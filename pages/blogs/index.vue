<script setup lang="ts">
const { data } = await useAsyncData("blogs", () => {
  return queryContent("blogs").where({ _type: "json" }).findOne()
})

const blogs = data.value?.body as ArticleResponse[]
</script>
<template>
  <div class="w-full md:flex items-center justify-center pt-10">
    <div>
      <div class="text-hero">
        Check Our Blogs to Blow Mind
        <br />
        <div class="rainbow-text">Mindful. Attrative. Easy.</div>
      </div>
      <div class="mt-14 lg:min-w-[70%]">
        <div
          class="mb-8 text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
        >
          List of Blogs
        </div>
        <ArticleCards :articles="blogs" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
