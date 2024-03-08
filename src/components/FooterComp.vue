<script setup lang="ts">
import 'iconify-icon'
import ActionButton from './actions/ActionButton.vue'
</script>

<template>
    <footer class="footer">
        <div class="footer-links | flow-wf">
            <h3>リンク</h3>
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
        </div>
    </footer>
</template>

<style lang="scss"></style>
