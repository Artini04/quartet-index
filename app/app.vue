<script setup lang="ts">
    const title = "IDX"
    const description = "Japanese Quartet Vocabulary Index"

    useSeoMeta({
        titleTemplate: (titleChunk) => {
            return titleChunk ?
                    `${titleChunk} // 日本語カルテット単語索引`
                :   "カルテット単語索引"
        },
        title,
        ogTitle: title,
        description,
        ogDescription: description,
        twitterTitle: title,
        twitterDescription: description,
        twitterCard: "summary",
    })

    useHead({
        htmlAttrs: {
            lang: "en",
        },
        link: [
            {
                rel: "icon",
                type: "image/ico",
                href: "/favicon.ico",
            },
        ],
    })
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
    .page-enter-active,
    .page-leave-active {
        transition: opacity 200ms;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
    }
</style>
