<script setup lang="ts">
	import type { Component } from "vue"

	interface Props {
		component: Component
		link: string
		label: string
	}

	defineProps<Props>()
</script>

<template>
	<component :is="component" :link :label />
</template>
