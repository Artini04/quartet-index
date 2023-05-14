<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { searchWord, status } from '@/supabase'

const searchQuery = ref<string>('')

function clearSearchQuery() {
	searchQuery.value = ''
}
</script>

<template>
	<div class="search-root">
		<div class="search-container">
			<div class="search-container__search-input-container">
				<Icon icon="tabler:search" />
				<input
					v-model="searchQuery"
					@keypress.enter.prevent="searchWord(searchQuery)"
					class="search-container__search-box"
					type="text"
					placeholder="Search word..."
					:disabled="status === 'fetch' ? true : false" />
			</div>
			<div class="search-container__search-button-container">
				<input
					@click.prevent="searchWord(searchQuery)"
					class="search-button-container__search-button"
					type="button"
					value="Go!"
					:disabled="status === 'fetch' ? true : false" />
			</div>
		</div>
		<div class="search-options-container">
			<div class="search-options-container__item">
				<ul class="search-options">
					<li>
						<a @click="clearSearchQuery()" href="#">clear</a>
					</li>
				</ul>
			</div>
			<div class="search-options-container__item">
				<ul class="other">
					<li class="loading-overlay" :status="status">status:</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
$input-padding: 0.7rem;

:root[data-theme='dark'] {
	--component-background-color: #505355;
	--component-background-color-active: #6d7277;
	--component-background-color-disabled: #3b3b3b;
	--component-font-color-disabled: #616161;
	--component-placeholder-color: #b0bdb0;
	--component-border-color: #5d7280;
	--component-border-radius: 5px;
	--status-loading: #fafa59;
	--status-ok: #90ee90;
}

.search-root {
	display: flex;
	flex-flow: column nowrap;
	gap: 0.3rem;
	padding: 1rem;

	max-width: 600px;
	margin: 0 auto;

	/* Search container structure */
	.search-container {
		display: flex;
		flex-flow: row nowrap;
		gap: 0.3rem;

		&__search-button-container,
		&__search-input-container {
			display: flex;
			flex-flow: row nowrap;
			gap: 0;

			background: var(--component-background-color);
			border-radius: var(--component-border-radius);

			&:focus-within {
				outline: 1px solid white;
			}
		}

		&__search-input-container {
			flex: 1 170%;
			justify-content: center;
			align-items: center;

			& > *:last-child {
				margin-left: 0.5rem;
			}
		}

		&__search-button-container {
			flex: 100px;

			transition: transform ease 100ms, background ease 200ms;

			&:is(:active) {
				transform: scale(0.9);
			}
			&:is(:hover, :focus) {
				background: var(--component-background-color-active);
			}

			&[disabled] {
				background: var(--component-background-color-disabled);
				color: var(--component-font-color-disabled);
			}
		}

		input {
			width: 100%;
		}
	}

	/* Search Options Structure */
	.search-options-container {
		margin: 0 2.5rem;
		display: flex;
		flex-flow: row wrap;
		gap: 0 2rem;
	}
}

/* Search Container : Search Icon, search-box */
.search-container {
	& > *:first-child {
		padding-left: $input-padding;
	}

	&__search-box {
		$font-size: 1.05rem;
		padding: $input-padding $input-padding $input-padding 0;
		font-size: $font-size;

		&::placeholder {
			color: var(--component-placeholder-color);
			font-size: $font-size;
		}
	}
}

/* Search Buttons Container : search-button */
.search-button-container {
	&__search-button {
		cursor: pointer;
		padding: $input-padding;

		&[disabled] {
			background: var(--component-background-color-disabled);
			cursor: not-allowed;

			&:is(:hover, :active) {
				background: var(--component-background-color-disabled);
			}
		}
	}
}

/* Aditional Buttons / Links Container : clear, home, about */
.search-options-container {
	&__item {
		position: relative;

		ul {
			display: flex;
			flex-flow: row wrap;
			gap: 0 0.5rem;

			li {
				text-decoration: underline;
				cursor: pointer;
			}
		}

		.loading-overlay {
			text-decoration: none;

			&::after {
				margin-left: 0.5rem;
			}

			&[status='fetch'] {
				color: var(--status-loading);

				&::after {
					content: 'fetching...';
				}
			}

			&[status='ok'] {
				color: var(--status-ok);

				&::after {
					content: 'ok';
				}
			}

			&[status='none'] {
				color: var(--status-ok);

				&::after {
					content: 'ok - no result';
				}
			}
		}

		&::after {
			--border-thickness: 2px;

			content: '';
			position: absolute;
			border-left: var(--border-thickness) solid var(--component-border-color);
			border-bottom: var(--border-thickness) solid var(--component-border-color);
			border-bottom-left-radius: 3px;
			width: 0.5rem;
			height: 0.5rem;
			margin-left: -1.15rem;
			margin-top: 0.25rem;
			left: 0;
			top: 0;
			aspect-ratio: 1;
		}
	}
}
</style>
