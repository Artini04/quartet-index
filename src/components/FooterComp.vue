<script setup lang="ts">
import 'iconify-icon'
import { useColorMode } from '@vueuse/core'
import ActionButton from './actions/ActionButton.vue'
import SectorItem from './SectorItem.vue'

const mode = useColorMode({
    modes: {
        contrast: 'dark contrast'
    }
})
</script>

<template>
    <footer class="space-wf">
        <div class="theme-list | flow-rv">
            <ActionButton
                id="set-theme-dark"
                type="button"
                value="Dark"
                icon="tabler:moon"
                @click="mode = 'dark'" />
            <ActionButton
                id="set-theme-contrast"
                type="button"
                value="Contrast"
                icon="tabler:contrast-filled"
                @click="mode = 'contrast'" />
        </div>

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

    .button {
        padding: 0.4em 0.6em !important;
    }
}

.theme-list {
    padding: 1em;
}
</style>
