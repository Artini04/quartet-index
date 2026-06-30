<script setup lang="ts">
	const title = "Index"
	const description = "Japanese Quartet Vocabulary Index made in Nuxt"
	const icon = "/cavatar.png"

	useSeoMeta({
		titleTemplate: (titleChunk) =>
			titleChunk ?
				`${titleChunk} / 中級日本語カルテット単語索引`
			:	"中級日本語カルテット単語索引",

		title,
		description,

		ogTitle: title,
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
				type: "image/png",
				href: icon,
			},
			{
				rel: "shortcut icon",
				type: "image",
				href: icon,
			},
		],
	})
</script>

<template>
	<IndexHeader />
	<div class="main-wrapper">
		<NuxtPage />
	</div>
	<IndexFooter />
</template>
