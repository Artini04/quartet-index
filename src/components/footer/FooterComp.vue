<script setup lang="ts">
import { Icon } from '@iconify/vue'

const ratio: number = 28
</script>

<template>
	<footer class="footer | padding-40 margin-auto width-20 | flow-y">
		<div>
			<p class="text-justify">
				Vue3と日本語を習うためにこの<a href="https://github.com/Artini04/quartet-index" target="_blank">プロジェクト</a>を作りました。使った言葉が「４技能でひろがる中級日本語カルテット」という本に由来しているものです。
			</p>
		</div>
		<div class="icon-list | text-center">
			<a href="https://github.com/Artini04/quartet-index" target="_blank">
				<Icon icon="tabler:brand-github-filled" :width="ratio" :height="ratio" />
			</a>
		</div>
	</footer>
</template>
