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
    <main class="main-options">
        <SectorItem icon="tabler:cards-filled">
            <template #heading>Card Preferences</template>

            <ActionCheckbox id="show-links" v-model="cardShowLinks">
                <template #short-desc>Show links</template>
                <template #long-desc>Show dictionary links under the definition section.</template>
            </ActionCheckbox>

            <ActionCheckbox id="bigger-text-jp" v-model="cardBiggerJpText">
                <template #short-desc>Enlarge Japanese Texts</template>
            </ActionCheckbox>

            <ActionCheckbox id="bigger-text-en" v-model="cardBiggerEnText">
                <template #short-desc>Enlarge English Definitions</template>
            </ActionCheckbox>
        </SectorItem>

        <SectorItem icon="tabler:search">
            <template #heading>Lookup Preferences</template>
            <div class="flow-rv">
                <label for="set-limit">Set lookup limit</label>
                <select name="limit" id="set-limit" v-model="limitQuery">
                    <option :value="10">Default (10)</option>
                    <option :value="25">Many (25)</option>
                </select>
            </div>
        </SectorItem>

        <SectorItem icon="tabler:database">
            <template #heading>Local Storage</template>

            <div>
                <input type="button" value="Clear localStorage" @click="clearLocalStorage" />
            </div>
        </SectorItem>
    </main>
</template>

<style lang="scss">
.main-options {
    & > * {
        background: var(--option-sector-bg-color);
        border: 1px solid var(--option-sector-bd-color);
        border-radius: var(--g-bor-rad-00);
        padding: 0.8rem 0.6rem;

        & + * {
            margin-top: 1rem;
        }
    }
}
</style>
