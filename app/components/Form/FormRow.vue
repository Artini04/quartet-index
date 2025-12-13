<template>
	<div class="form-row">
		<slot />
	</div>
</template>

<style lang="scss">
	.form-row {
		& > * + * {
			margin-inline-start: 1ch;
		}
	}
</style>
