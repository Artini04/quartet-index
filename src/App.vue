<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from './components/header/HeaderComp.vue'
import FooterComp from './components/footer/FooterComp.vue'
</script>

<template>
	<HeaderComp />
	<RouterView />
	<FooterComp />
</template>
