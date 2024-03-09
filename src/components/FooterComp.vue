<script setup lang="ts">
import 'iconify-icon'
import ActionButton from './actions/ActionButton.vue'
import SectorItem from './SectorItem.vue'
</script>

<template>
    <footer>
        <SectorItem icon="tabler:circle-arrow-up-right">
            <template #heading>リンク</template>
            <ActionButton
                id="to-github"
                value="Project Page"
                icon="tabler:brand-github-filled"
                src="https://github.com/Artini04/quartet-index" />
            <ActionButton
                id="to-github"
                value="Issues / Suggestions"
                icon="tabler:circle-dot"
                src="https://github.com/Artini04/quartet-index/issues" />
        </SectorItem>
    </footer>
</template>

<style>
footer {
    padding: 0.8rem 0.6rem;
    background: var(--footer-bg-color);
    border-radius: var(--g-bor-rad-00);
}
</style>
