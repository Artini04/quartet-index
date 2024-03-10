<script setup lang="ts">
import 'iconify-icon'
import ActionButton from './actions/ActionButton.vue'
import SectorItem from './SectorItem.vue'
</script>

<template>
    <footer>
        <SectorItem icon="tabler:link">
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
    background: var(--footer-bg-color);
    border-radius: var(--g-bor-rad-00);

    .button {
        padding: 0.4em 0.6em !important;
    }
}
</style>
