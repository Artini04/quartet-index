<script setup lang="ts">
import { Icon } from '@iconify/vue'

const ratio: number = 28
</script>

<template>
	<footer class="footer__root">
		<div class="footer__p-container">
			<p class="footer__p">
				この
				<a href="https://github.com/Artini04/quartet-index" target="_blank">プロジェクト</a>
				がVue3と日本語を習うために
				<a href="https://github.com/Artini04" target="_blank">artini04</a>
				に作られました。英和辞書ではありません。使った言葉が「４技能でひろがる中級日本語カルテット」という本に由来しているものです。
			</p>
		</div>
		<div class="footer__icon-list">
			<a href="https://github.com/Artini04/quartet-index" target="_blank">
				<Icon icon="tabler:brand-github-filled" :width="ratio" :height="ratio" />
			</a>
		</div>
	</footer>
</template>

<style lang="scss">
.footer {
	&__root {
		max-width: 600px;
		padding: 1rem;
		margin: 0 auto;

		& > * + * {
			margin-top: 0.5rem;
		}
	}

	&__p-container {
		border-top: 1px solid var(--app-font-muted);
		padding: 1rem 0 0 0;
	}

	&__p {
		text-align: justify;
	}

	&__icon-list {
		text-align: center;

		& > * {
			display: inline-block;
		}

		& > * + * {
			margin-left: 0.3rem;
		}
	}
}
</style>
