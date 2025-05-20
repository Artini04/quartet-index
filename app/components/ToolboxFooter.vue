<script lang="ts" setup>
    // const date = await getLatestUpdateDate()
    const date = useLocalStorage("app.latest-update", {
        value: "RATE LIMITED",
        date: new Date(),
    })

    async function getLatestUpdateDate() {
        const { data, error } = await useAsyncData("item", () =>
            $fetch(
                "https://api.github.com/repos/Artini04/quartet-index/commits?page=1&per_page=1",
            ),
        )

        if (unref(error)) {
            return "RATE LIMITED"
        }

        const updateDate = new Date(
            unref(data as any)[0]["commit"]["author"]["date"],
        )
        const year = updateDate.getFullYear()
        const month = updateDate.getMonth() + 1
        const day = updateDate.getDate()
        const hours = updateDate.getHours()
        const minutes = updateDate.getMinutes()

        return `年${year}月${month}日${day} - ${hours}:${minutes}`
    }

    function clearLocalStorage() {
        localStorage.clear()
    }
</script>

<template>
    <footer class="toolbox-footer">
        <div class="link-wrapper">
            <ActionLinkExternal
                text="Github"
                icon="tabler:brand-github"
                src="https://github.com/Artini04/quartet-index"
                :hide-external="true"
            />
            <ActionLinkExternal
                text="Issues / Suggestions"
                icon="tabler:circle-dot"
                src="https://github.com/Artini04/quartet-index/issues"
                :hide-external="true"
            />
        </div>

        <div class="mark-wrapper">
            <div class="copy">
                <span>{{ new Date().getFullYear() }}</span>
                <span>//</span>
                <span>
                    built by
                    <ActionLinkExternal
                        text="@artini04"
                        src="https://github.com/Artini04"
                    />
                </span>
            </div>
            <ActionButton
                id="reset-storage"
                text="Reset localStorage"
                @click="clearLocalStorage()"
            />
        </div>

        <div class="latest-wrapper">
            <span>最終更新日：{{ date.value }}</span>
        </div>
    </footer>
</template>

<style lang="scss">
    // @use "~/assets/styles/modules/utilities" as util;
    // .toolbox-footer {
    //   margin-top: 1em;
    //   display: grid;
    //   grid-template-columns: 1fr 3fr 1fr;
    //   color: hsl(0, 0%, 60%);
    //   font-size: 0.85em;

    //   & .link-wrapper,
    //   & .mark-wrapper,
    //   & .latest-wrapper {
    //     @include util.use-flex(row, nowrap, 0 1em);
    //     @include util.use-align(center, center);
    //   }

    //   & .link-wrapper {
    //     flex-wrap: wrap;
    //     justify-content: flex-start;
    //   }

    //   & .mark-wrapper {
    //     flex-direction: column;

    //     & .copy {
    //       @include util.use-flex(row, nowrap, 0 1em);
    //     }
    //   }

    //   & .latest-wrapper {
    //     justify-content: flex-end;
    //   }

    //   @container (width <= 700px) {
    //     @include util.use-flex(column, nowrap, 0);

    //     & .link-wrapper,
    //     & .mark-wrapper,
    //     & .latest-wrapper {
    //       @include util.use-align(center, center);
    //     }
    //   }
    // }
</style>
