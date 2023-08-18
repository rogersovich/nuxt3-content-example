<script setup lang="ts">
useHead({
  title: "Home Page",
})

const { data } = await useAsyncData("articles", () => {
  return queryContent("articles").where({ _type: "json" }).findOne()
})

const articles = data.value?.body as ArticleResponse[]
</script>
<template>
  <div class="w-full fcc pt-10">
    <div>
      <div class="text-hero">
        Check Our Blogs to Blow Mind
        <br />
        <div class="rainbow-text">Mindful. Attrative. Easy.</div>
      </div>
      <div>
        <div class="mt-14">
          <div
            class="mb-8 text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
          >
            Recommendation Blogs
          </div>
          <ArticleCards :articles="articles" />
        </div>
        <div class="mt-14">
          <div
            class="mb-8 text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
          >
            Recommendation Blogs
          </div>
          <ArticleCards :articles="articles" />
        </div>
        <div class="mt-14">
          <div
            class="mb-8 text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
          >
            Recommendation Blogs
          </div>
          <ArticleCards :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
