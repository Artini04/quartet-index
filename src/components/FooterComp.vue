<script setup lang="ts">
import 'iconify-icon'
import { useColorMode } from '@vueuse/core'
import ActionButton from './actions/ActionButton.vue'
import SectorItem from './SectorItem.vue'

const { store } = useColorMode({
    modes: {
        contrast: 'dark contrast'
    }
})
</script>

<template>
    <footer class="space-wf">
        <SectorItem icon="tabler:paint" :indent="false">
            <template #heading>Theme [WIP]</template>
            <div class="theme-list">
                <ActionButton
                    id="set-theme-light"
                    type="button"
                    value="Light"
                    icon="tabler:sun"
                    @click="store = 'light'" />
                <ActionButton
                    id="set-theme-dark"
                    type="button"
                    value="Dark"
                    icon="tabler:moon"
                    @click="store = 'dark'" />
                <ActionButton
                    id="set-theme-contrast"
                    type="button"
                    value="Contrast"
                    icon="tabler:contrast-filled"
                    @click="store = 'contrast'" />
            </div>
        </SectorItem>

        <SectorItem icon="tabler:link" :indent="false">
            <template #heading>リンク</template>
            <ActionButton
                id="to-github"
                type="link"
                value="Project Page"
                icon="tabler:brand-github-filled"
                src="https://github.com/Artini04/quartet-index" />
            <ActionButton
                id="to-github"
                type="link"
                value="Issues / Suggestions"
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
