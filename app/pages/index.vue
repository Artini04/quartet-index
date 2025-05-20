<script setup lang="ts">
    useHead({
        title: "Lookup",
    })
</script>

<template>
    <main data-page="home">
        <div class="grid-item-content | lookup-content">
            <h2>Lookup</h2>
            <ControlSearch />
            <ControlResult />
        </div>

        <div class="grid-item-content | about-content">
            <h2>About & Information</h2>
            <ControlSectionItem
                header-title="中級日本語カルテット単語索引アプリ"
                header-icon="tabler:notebook"
            >
                <p class="indent">
                    A small Quartet Book Vocabulary Index written using Nuxt.
                    Lesson numbers are
                    <span class="span--info">colored</span>
                    based on their respective book color. I also added links
                    from English-Japanese dictionaries to access them easier.
                    You can turn them off in the options.
                </p>
            </ControlSectionItem>

            <ControlSectionItem
                header-title="単語リストについて"
                header-icon="tabler:bookmarks"
            >
                <p class="indent">
                    Words used are from the book QUARTET: INTERMEDIATE JAPANESE
                    ACROSS THE FOUR LANGUAGE SKILLS. You can download the
                    spreadsheet in their
                    <ControlExternalLink
                        label="resources"
                        href="https://quartet.japantimes.co.jp/en/resource/"
                    />
                    website under Index section.
                </p>
            </ControlSectionItem>
        </div>
    </main>
</template>

<style lang="scss">
    @use "~/assets/css/layers";

    .lookup-content,
    .about-content {
        @include layers.flow();
    }
</style>
