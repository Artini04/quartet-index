<script lang="ts" setup>
    defineProps<{
        lesson: number
        reading: number
        kanji: string
        location: string
    }>()
</script>

<template>
    <div class="word-info">
        <span class="info-lesson" :book="lesson < 7 ? 1 : 2">
            第{{ convertToFull(lesson) }}課
        </span>
        <span class="info-reading">読み{{ convertToFull(reading) }}</span>
        <span class="info-location">{{ location }}</span>
        <span class="info-kanji">{{ kanji }}</span>
    </div>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/layouts";

    .word-info {
        --flex-wrap: nowrap;
        --flex-gap: 0.6em;

        @extend %flex;

        & .info-lesson {
            flex: 99 1 auto;

            &[book="1"] {
                color: hsl(0, 100%, 70%);
            }

            &[book="2"] {
                color: hsl(200, 100%, 70%);
            }
        }
    }
</style>
