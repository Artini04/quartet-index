<script setup lang="ts">
import 'iconify-icon'
import { defineAsyncComponent } from 'vue'
import { useColorMode } from '@vueuse/core'
import ActionButton from './actions/ActionButton.vue'
import SectorItem from './SectorItem.vue'

import LinkSlot from './actions/other/LinkSlot.vue'
import ButtonSlot from './actions/other/ButtonSlot.vue'

const { store } = useColorMode({
    modes: {
        contrast: 'dark contrast'
    }
})
</script>

<template>
    <footer class="space-wf">
        <SectorItem icon="tabler:paint" :indent="false">
            <template #heading>Theme</template>
            <div class="theme-list">
                <ActionButton
                    :is="ButtonSlot"
                    id="set-theme-light"
                    label="Light"
                    icon="tabler:sun-filled"
                    @click="store = 'light'" />
                <ActionButton
                    :is="ButtonSlot"
                    id="set-theme-dark"
                    label="Dark"
                    icon="tabler:moon-filled"
                    @click="store = 'dark'" />
                <ActionButton
                    :is="ButtonSlot"
                    id="set-theme-contrast"
                    label="Contrast Dark"
                    icon="tabler:contrast-filled"
                    @click="store = 'contrast'" />
            </div>
        </SectorItem>

        <SectorItem icon="tabler:link" :indent="false">
            <template #heading>リンク</template>
            <ActionButton
                :is="LinkSlot"
                id="to-github"
                label="Project Page"
                icon="tabler:brand-github-filled"
                src="https://github.com/Artini04/quartet-index" />
            <ActionButton
                :is="LinkSlot"
                id="to-github"
                label="Issues / Suggestions"
                icon="tabler:circle-dot"
                src="https://github.com/Artini04/quartet-index/issues" />
        </SectorItem>
    </footer>
</template>

<style lang="scss">
footer {
    --space-gap: -1em;
    background: var(--footer-bg-color);
    border-radius: var(--g-bor-rad-00);
    border: 1px solid var(--footer-bd-color);

    .button {
        padding: 0.4em 0.6em !important;
    }
}

.theme-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.5rem;
}
</style>
