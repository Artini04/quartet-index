<template>
	<div class="flow-y-50">
		<div class="result-heading">
			<slot name="header"> </slot>
		</div>
		<div class="result-grid" v-auto-animate>
			<slot name="item"> </slot>
		</div>
	</div>
</template>

<style lang="scss">
$border-thickness: 1px;

@media screen and (max-width: 452px) {
	.result-grid {
		display: flex;
		flex-flow: column nowrap;
		gap: 1rem;
	}
}

@media screen and (min-width: 453px) {
	.result-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}
}
</style>
