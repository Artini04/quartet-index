<script setup lang="ts">
import { useOptions } from '@/stores/lookup'
import SectorItem from '@/components/SectorItem.vue'
import ActionCheckbox from '@/components/actions/ActionCheckbox.vue'

const { cardShowLinks, cardBiggerJpText, cardBiggerEnText } = useOptions()

function clearLocalStorage() {
    localStorage.clear()
}
</script>

<template>
    <main class="main-options">
        <SectorItem icon="tabler:cards-filled">
            <template #heading>Card Preference</template>

            <ActionCheckbox id="show-links" v-model="cardShowLinks">
                <template #short-desc>Show links</template>
                <template #long-desc>Show dictionary links under the definition section.</template>
            </ActionCheckbox>

            <ActionCheckbox id="bigger-text-jp" v-model="cardBiggerJpText">
                <template #short-desc>Enlarge Japanese Texts</template>
                <template #long-desc>Enlarge Japanese texts for easy reading</template>
            </ActionCheckbox>

            <ActionCheckbox id="bigger-text-en" v-model="cardBiggerEnText">
                <template #short-desc>Enlarge card definition</template>
                <template #long-desc>Enlarge English texts for easy reading</template>
            </ActionCheckbox>
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
        padding: 0.4rem 0.6rem 0.8rem;
        background: var(--option-sector-bg-color);
        border-radius: var(--g-bor-rad-00);
    }

    & > * + * {
        margin-top: 1rem;
    }
}
</style>
