<script lang="ts" setup>
    defineProps<{
        search: string
    }>()
</script>

<template>
    <div class="word-dicts">
        <ControlExternalLink
            label="Weblio英和辞典"
            :href="`https://ejje.weblio.jp/content/${search}`"
        />
        <ControlExternalLink
            label="jpdb.io"
            :href="`https://jpdb.io/search?q=${search}#a`"
        />
        <ControlExternalLink
            label="jisho.org"
            :href="`https://jisho.org/search/${search}`"
        />
    </div>
</template>

<style lang="scss">
    @use "~/assets/styles/modules/layouts";

    .word-dicts {
        --flex-gap: 0 0.6em;
        @extend %flex;

        font-size: 0.85em;
        color: hsl(0, 0%, 60%);

        & > * {
            text-decoration: none;
        }
    }
</style>
