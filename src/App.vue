<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComp from './components/footer/FooterComp.vue'
import HeaderComp from './components/header/HeaderComp.vue'
</script>

<template>
	<HeaderComp />
	<RouterView />
	<FooterComp />
</template>
