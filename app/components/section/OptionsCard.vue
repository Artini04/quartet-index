<script lang="ts" setup>
    const { appOptions } = storeToRefs(useApplicationStore())
</script>

<template>
    <div class="options-card">
        <SectionItem
            class="options-card__section-item"
            icon="tabler:file-text"
            :background="true"
        >
            <template #heading>Card Options</template>
            <ActionCheckbox
                id="check-show-dictionary"
                v-model="appOptions.showDictionary"
                text="Show dictionary"
                subtext="Show dictionary link at the bottom of the word card."
            />

            <ActionCheckbox
                id="check-enlarge-jp"
                v-model="appOptions.enlargeJapaneseText.active"
                text="Custom Japanese text size"
            />
            <ActionSlider
                id="slider-jp-size"
                v-model="appOptions.enlargeJapaneseText.largeSize"
                text="Size (em)"
                :disabled="!appOptions.enlargeJapaneseText.active"
            />

            <ActionCheckbox
                id="check-enlarge-en"
                v-model="appOptions.enlargeEnglishText.active"
                text="Custom English text size"
            />
            <ActionSlider
                id="slider-en-size"
                v-model="appOptions.enlargeEnglishText.largeSize"
                text="Size (em)"
                :disabled="!appOptions.enlargeEnglishText.active"
            />
        </SectionItem>
    </div>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/layouts";

    .options-card {
        @extend %grid;
    }

    .options-card__section-item {
        @extend %grid-content;
    }
</style>
