<script lang="ts" setup>
    useHead({
        title: "About",
    })
</script>

<template>
    <main data-page="option-about">
        <div class="flow-block | grid-item-content | option-about-content">
            <ControlSectionItem
                header-title="中級日本語カルテット単語索引"
                header-icon="tabler:notebook"
            >
                <p class="indent">
                    A small Japanese Quartet Vocabulary Index written using
                    Nuxt. Lesson numbers are
                    <span class="span--blue">colored</span> based on their
                    respective book color. I also added links from
                    English-Japanese dictionaries to access them easier. You can
                    turn them off in the options.
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
