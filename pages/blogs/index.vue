<script setup lang="ts">
const { data } = await useAsyncData("homepage", () => {
  return queryContent("/articles").find()
})

const blog1 = data.value ? data.value[0] : []
</script>
<template>
  <div class="p-6">
    <div class="text-lg text-red-500">Kucing Merah</div>
    <br />
    <ContentRenderer :value="blog1">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
    <NuxtLink to="/">Back Home</NuxtLink>
    <div class="grid-12 gap-4">
      <div class="col-span-4">
        <div class="card-base bg-slate-100">
          <h1 class="text-lg font-medium">Title</h1>
          <div class="mt-0.5">hsdfdsfds</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
