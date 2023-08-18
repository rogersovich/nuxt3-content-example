<script setup lang="ts">
useHead({
  title: "Home Page",
})

const { data } = await useAsyncData("blogs", () => {
  return queryContent("blogs").where({ _type: "json" }).findOne()
})

const blogs = data.value?.body as ArticleResponse[]
</script>
<template>
  <div class="w-full md:flex items-center justify-center pt-10">
    <div>
      <div class="text-hero">
        I Can Show You The World
        <br />
        <div class="rainbow-text leading-snug">
          Shining. Shimering. Splendid.
        </div>
      </div>
      <div>
        <div class="mt-14">
          <div
            class="mb-8 text-lg md:text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
          >
            Recommendation Blogs
          </div>
          <ArticleCards :articles="blogs" />
        </div>
        <div class="mt-14">
          <div
            class="mb-8 text-lg md:text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
          >
            Recommendation Blogs
          </div>
          <ArticleCards :articles="blogs" />
        </div>
        <div class="mt-14">
          <div
            class="mb-8 text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
          >
            Recommendation Blogs
          </div>
          <ArticleCards :articles="blogs" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
