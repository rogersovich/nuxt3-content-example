<script setup lang="ts">
interface Props {
  articles: ArticleResponse[]
}
defineProps<Props>()
</script>
<template>
  <div class="grid-12 gap-6">
    <div
      class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
      v-for="post in articles"
      :key="post.id"
    >
      <NuxtLink :to="`blogs/${slugify(post.title)}`">
        <div
          class="card-base group border-2 border-slate-300 hover:border-emerald-500 cursor-pointer ease-in duration-100 hover:scale-105"
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
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
