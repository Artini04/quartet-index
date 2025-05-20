<script lang="ts" setup>
    defineProps<{
        search: string
    }>()
</script>

<template>
    <div class="word-dicts">
        <ActionLinkExternal
            text="Weblio英和辞典"
            :src="`https://ejje.weblio.jp/content/${search}`"
        />
        <ActionLinkExternal
            text="jpdb.io"
            :src="`https://jpdb.io/search?q=${search}#a`"
        />
        <ActionLinkExternal
            text="jisho.org"
            :src="`https://jisho.org/search/${search}`"
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
