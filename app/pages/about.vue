<script lang="ts" setup>
    useHead({
        title: "About",
    })
</script>

<template>
    <main data-page="option-about">
        <div class="grid-item-content | option-about-content">
            <ControlSectionItem
                header-title="中級日本語カルテット単語索引アプリ"
                header-icon="tabler:notebook"
            >
                <!-- <p class="indent">
                    こちらはNuxtを使って作成された、小さな「中級日本語クァルテット単語索引」アプリです。
                    レッスン番号は、それぞれの
                    <span class="span--info">教科書の色に基づいて</span>
                    色分けされています。
                    英和辞書へのリンクも追加しており、簡単にアクセスできるようになっています。
                    オプションでリンクを無効にすることも可能です。
                </p> -->
                <p class="indent">
                    A small Japanese Quartet Vocabulary Index written using
                    Nuxt. Lesson numbers are
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
                <!-- <p class="indent">
                    使用されている単語は、書籍「QUARTET: INTERMEDIATE JAPANESE
                    ACROSS THE FOUR LANGUAGE
                    SKILLS」からのものです。スプレッドシートは、公式リソースサイトの
                    <ControlExternalLink
                        label="「Index」セクション"
                        href="https://quartet.japantimes.co.jp/en/resource/"
                    />
                    からダウンロードできます。
                </p> -->
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

    .option-about-content {
        @include layers.flow();
    }
</style>
