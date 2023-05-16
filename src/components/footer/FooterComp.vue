<script setup lang="ts">
import { Icon } from '@iconify/vue'

const ratio: number = 28
</script>

<template>
	<footer class="footer | padding-40 margin-auto width-20 | flow-spaced">
		<div>
			<p class="text-justify">
				この
				<a href="https://github.com/Artini04/quartet-index" target="_blank">プロジェクト</a>
				がVue3と日本語を習うために
				<a href="https://github.com/Artini04" target="_blank">artini04</a>
				に作られました。英和辞書ではありません。使った言葉が「４技能でひろがる中級日本語カルテット」という本に由来しているものです。
			</p>
		</div>
		<div class="icon-list | text-center">
			<a href="https://github.com/Artini04/quartet-index" target="_blank">
				<Icon icon="tabler:brand-github-filled" :width="ratio" :height="ratio" />
			</a>
		</div>
	</footer>
</template>
