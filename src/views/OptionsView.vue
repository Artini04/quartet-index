<script setup lang="ts">
import { useOptions, useLookup } from '@/stores/lookup'
import SectorItem from '@/components/SectorItem.vue'
import ActionCheckbox from '@/components/actions/ActionCheckbox.vue'
import ActionButton from '@/components/actions/ActionButton.vue'

const { cardShowLinks, cardBiggerJpText, cardBiggerEnText } = useOptions()
const { limitQuery } = useLookup()

function clearLocalStorage() {
    localStorage.clear()
}
</script>

<template>
    <main class="main-options | space-wf">
        <div class="main-options-cat | space-wf">
            <SectorItem icon="tabler:cards">
                <template #heading>Card Preferences</template>

                <ActionCheckbox id="show-links" v-model="cardShowLinks">
                    <template #short-desc>Show links</template>
                    <template #long-desc
                        >Show dictionary links under the definition section.</template
                    >
                </ActionCheckbox>

                <ActionCheckbox id="bigger-text-jp" v-model="cardBiggerJpText">
                    <template #short-desc>Enlarge Japanese Texts</template>
                </ActionCheckbox>

                <ActionCheckbox id="bigger-text-en" v-model="cardBiggerEnText">
                    <template #short-desc>Enlarge English Definitions</template>
                </ActionCheckbox>
            </SectorItem>

            <SectorItem icon="tabler:list-search">
                <template #heading>Lookup Preferences</template>
                <div class="flow-rv">
                    <label for="set-limit">Set lookup limit</label>
                    <select name="limit" id="set-limit" v-model="limitQuery">
                        <option :value="10">Default (10)</option>
                        <option :value="25">Many (25)</option>
                    </select>
                </div>
            </SectorItem>
        </div>

        <SectorItem icon="tabler:box">
            <template #heading>Local Storage</template>

            <ActionButton
                class="clear-storage"
                id="clear-storage"
                value="Clear localStorage"
                icon="tabler:trash"
                target="parent"
                @click="clearLocalStorage" />
        </SectorItem>
    </main>
</template>

<style lang="scss">
.main-options {
    --space-gap: 1em;

    & > * {
        background: var(--option-sector-bg-color);
        border: 1px solid var(--option-sector-bd-color);
        border-radius: var(--g-bor-rad-00);
        box-shadow: 0 0 10px -5px var(--section-shw-color);
    }

    &-cat {
        --space-gap: -1em;
    }
}

.clear-storage {
    background: var(--clear-storage-bg-color) !important;
    color: var(--clear-storage-ft-color) !important;
}
</style>
