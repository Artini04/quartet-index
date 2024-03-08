<script setup lang="ts">
import ActionButton from './actions/ActionButton.vue'
</script>

<template>
    <header>
        <nav>
            <ActionButton
                :isRouterLink="true"
                id="to-home"
                src="/"
                value="Home"
                icon="tabler:circle-arrow-up-right-filled" />
            <ActionButton
                :isRouterLink="true"
                id="to-options"
                src="/options"
                value="Options"
                icon="tabler:settings" />
        </nav>
    </header>
</template>

<style lang="scss">
nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.4rem;
}
</style>
