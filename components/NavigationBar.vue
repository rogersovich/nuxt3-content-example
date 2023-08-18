<script setup lang="ts">
const { y } = useWindowScroll()
const route = useRoute()

const NAV_OPTIONS = [
  {
    title: "Blogs",
    route: "/blogs",
    key: "blogs",
  },
  {
    title: "Documentation",
    route: "/",
    key: "documentation",
  },
]
</script>
<template>
  <div
    :class="
      cn('nav-app', {
        'border-b-2': y > 10,
      })
    "
  >
    <IconsMenu class="w-8 h-8 text-primary md:hidden" />
    <NuxtLink to="/" class="grow md:grow-0 text-center">
      <div class="text-2xl md:text-3xl font-bold">
        Nuxt <span class="rainbow-text">Content</span>
      </div>
    </NuxtLink>
    <div class="md:flex items-center justify-center gap-5 hidden">
      <NuxtLink
        :to="nav.route"
        :class="
          cn(
            'link',
            '/' + route.path.split('/')[1] == nav.route &&
              'font-medium border-b-2'
          )
        "
        v-for="nav in NAV_OPTIONS"
        :key="nav.key"
      >
        {{ nav.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
