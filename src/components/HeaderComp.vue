<script setup lang="ts">
import ActionButton from './actions/ActionButton.vue'
</script>

<template>
    <header class="header | space-wf">
        <div class="header-title | text-center">
            <h1>「トカ」Pocket Quartet</h1>
            <h2>日本語カルテット単語索引</h2>
        </div>
        <nav class="header-nav">
            <ActionButton
                id="to-home"
                type="router"
                variant="active"
                value="Lookup"
                src="/"
                icon="tabler:list-search" />
            <ActionButton
                id="to-options"
                type="router"
                variant="active"
                value="Options"
                src="/options"
                icon="tabler:settings" />
            <ActionButton
                id="to-about"
                type="router"
                variant="active"
                value="About"
                src="/about"
                icon="tabler:paperclip" />
        </nav>
    </header>
</template>

<style lang="scss">
.header {
    &-title {
        h1 {
            font-size: 1.7em;
        }

        h2 {
            font-size: 1.6em;
        }
    }

    &-nav {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.5rem;

        .button {
            padding: 0.8rem 1rem;
        }
    }
}
</style>
