<script setup lang="ts">

interface ArticleResponse {
  id: number
  title: string
  image: string
  tags: string[]
}

useHead({
  title: "Home Page",
})

const { data } = await useAsyncData("articles", () => {
  return queryContent("articles").where({ _type: "json" }).findOne()
})

const articles = data.value?.body as ArticleResponse[]
</script>
<template>
  <div class="w-full fcc pt-20">
    <div>
      <div class="text-hero">
        Check Our Blogs to Blow Mind
        <br />
        <div class="rainbow-text">Mindful. Attrative. Easy.</div>
      </div>
      <div class="mt-14">
        <div
          class="mb-8 text-xl text-slate-500 font-medium uppercase text-center tracking-wide"
        >
          Recommendation Blogs
        </div>
        <div class="grid-12 gap-6">
          <div
            class="col-span-12 md:col-span-6 lg:col-span-4"
            v-for="post in articles"
            :key="post.id"
          >
            <div
              class="card-base group border-2 border-slate-300 hover:border-emerald-500 cursor-pointer"
            >
              <div class="mb-4">
                <nuxt-img
                  :src="`/img/${post.image}`"
                  class="w-full h-[150px] object-cover rounded-md"
                />
              </div>
              <div>
                <div v-for="(tags, i) in post.tags" :key="i">
                  <div
                    class="bg-slate-300 py-0.5 rounded-full px-3 w-fit mb-2 text-sm"
                  >
                    {{ tags }}
                  </div>
                </div>
                <div
                  class="text-xl text-slate-700 group-hover:text-primary-700 font-bold"
                >
                  {{ post.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
