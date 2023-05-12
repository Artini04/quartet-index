<script setup lang="ts">
defineProps<{
	ja_kk: string | null
	ja_h: string | null
	en: string | null
	kanji: number | null
	lesson: number
	reading: number
}>()
</script>

<template>
	<tr class="result__row">
		<td class="word__kanji-diam">
			{{ !kanji ? '' : kanji === 2 ? '&#9670;' : '&#9671;' }}
		</td>
		<td class="word__lesson">L{{ lesson }} 読み{{ reading }}</td>
		<td class="word__vocab">
			<span v-for="item in ja_kk ? ja_kk?.split(';') : ja_h?.split(';')" :key="item">
				{{ item }}
			</span>
		</td>
		<td class="word__reading">
			<span v-for="item in ja_kk ? ja_h?.split(';') : []" :key="item">
				{{ item }}
			</span>
		</td>
		<td class="word__meaning">
			<span v-for="item in en?.split(';')" :key="item">
				{{ item }}
			</span>
		</td>
	</tr>
</template>

<style lang="scss" scoped>
td {
	$border-color: var(--table-border);
	$border-size: 1px;

	border-left: $border-size solid $border-color;
	border-right: $border-size solid $border-color;

	padding: 0.2rem 0.6rem;

	span {
		display: block;
	}
}

.word {
	&__kanji-diam {
		text-align: center;
	}

	&__meaning {
		span {
			&::before {
				content: '\2756';
				margin-right: 0.5rem;
			}
		}
	}

	&__lesson {
		text-align: end;
	}
}
</style>
