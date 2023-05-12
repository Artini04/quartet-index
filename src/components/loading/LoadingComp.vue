<script setup lang="ts">
import { isSearching } from '@/supabase'
</script>

<template>
	<div class="search-overlay" :searching="isSearching"></div>
</template>

<style lang="scss">
.search-overlay {
	position: absolute;
	width: 100svw;
	height: 100svh;
	opacity: 0;
	z-index: 999;
	user-select: none;
	pointer-events: none;

	background: black;
	transition: opacity ease 500ms;

	&[searching='true'] {
		opacity: 1;
		pointer-events: all;
	}
}
</style>
