<script setup lang="ts">
import ActionButton from './actions/ActionButton.vue'
</script>

<template>
    <header>
        <nav>
            <ActionButton
                :isRouterLink="true"
                variant="active"
                id="to-home"
                src="/"
                value="Lookup"
                icon="tabler:search" />
            <ActionButton
                :isRouterLink="true"
                variant="active"
                id="to-options"
                src="/options"
                value="Options"
                icon="tabler:settings" />
            <ActionButton
                :isRouterLink="true"
                variant="active"
                id="to-about"
                src="/about"
                value="About"
                icon="tabler:paperclip" />
        </nav>
    </header>
</template>

<style lang="scss">
nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.5rem;
}
</style>
