<script lang="ts" setup>
    const { appOptions } = storeToRefs(useApplicationStore())
    const { enlargeEnglishText, enlargeJapaneseText } = appOptions.value

    defineProps<{
        // Japanese
        jpText: string
        jpSubtext?: string | null
        jpParticle?: string | null
        jpSuru?: string | null

        // Meaning
        mnMeaning: string | null
        mnVerbType?: string | null
    }>()

    const jpTextSize = computed(() =>
        enlargeJapaneseText.active ?
            `${enlargeJapaneseText.largeSize}em`
        :   "1em",
    )
    const enTextSize = computed(() =>
        enlargeEnglishText.active ? `${enlargeEnglishText.largeSize}em` : "1em",
    )
</script>

<template>
    <div class="word-content">
        <div class="word-content__jp" jp>
            <span class="jp-text">{{ jpText }}</span>
            <span class="jp-subtext">
                <span v-if="jpParticle">{{ jpParticle }}</span>
                <span v-if="jpSubtext">{{ jpSubtext }}</span>
                <span v-if="jpSuru">{{ jpSuru }}</span>
            </span>
        </div>
        <div class="word-content__mn">
            <span class="mn-meaning">{{ mnMeaning }}</span>
            <span class="mn-verb-type">{{ mnVerbType }}</span>
        </div>
    </div>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/layouts";

    .word-content {
        --flex-dir: column;
        --flex-gap: 0.2em;

        @extend %flex;
    }

    .word-content__jp {
        font-size: v-bind(jpTextSize);

        & .jp-text {
            color: hsl(14, 100%, 60%);
        }

        & .jp-subtext {
            color: hsl(50, 100%, 60%);
        }

        & > * + * {
            margin-left: 0.6em;
        }
    }

    .word-content__mn {
        font-size: v-bind(enTextSize);

        &::before {
            content: "【英】";
        }
    }
</style>
