<script setup lang="ts">
const title = "Home"
const description = "Japanese Quartet Vocabulary Index"

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} // カルテット単語索引`
      : "カルテット単語索引"
  },
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "[twitter:image]",
  twitterCard: "summary"
})

useHead({
  htmlAttrs: {
    lang: "en"
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico"
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
