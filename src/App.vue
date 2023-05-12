<script setup lang="ts">
import { RouterView } from 'vue-router'
import SearchComp from './components/search/SearchComp.vue'
import HeaderComp from './components/header/HeaderComp.vue'
import FooterComp from './components/footer/FooterComp.vue'
</script>

<template>
	<HeaderComp />
	<SearchComp />
	<RouterView />
	<FooterComp />
</template>
