<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import ActionButton from './actions/ActionButton.vue'
import RouterSlot from './actions/other/RouterSlot.vue'
</script>

<template>
    <header class="header | space-wf">
        <div class="header-title | text-center">
            <h1>「トカ」Pocket Quartet</h1>
            <h2>日本語カルテット単語索引</h2>
        </div>
        <nav class="header-nav">
            <ActionButton
                :is="RouterSlot"
                id="to-home"
                label="Lookup"
                icon="tabler:list-search"
                src="/" />
            <ActionButton
                :is="RouterSlot"
                id="to-options"
                label="Options"
                icon="tabler:settings"
                src="/options" />
            <ActionButton
                :is="RouterSlot"
                id="to-about"
                label="About"
                icon="tabler:paperclip"
                src="/about" />
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
