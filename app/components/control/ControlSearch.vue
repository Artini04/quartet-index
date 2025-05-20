<script setup lang="ts">
    const { search, result } = storeToRefs(useLookupStore())
</script>

<template>
    <div class="search">
        <label for="search-input" class="search-label">
            <Icon name="tabler:search" />
            <input
                class="search__input"
                v-model.lazy="search"
                type="search"
                id="search-input"
                placeholder="ひらがな, カタカナ, 漢字, 英語を探す..."
                spellcheck="false"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
            />
            <Icon name="tabler:filter-search" />
            <span>{{ result.length }}</span>
        </label>
    </div>
</template>

<style lang="scss">
    @use "~/assets/css/utils";

    .search {
        border: var(--global-border);
        border-radius: var(--global-border-radius);
        outline: 1px solid transparent;
        @include utils.use-transition("border, outline");

        &:has(:focus-within) {
            outline: 2px solid hsl(0 0% 95%);
        }
    }

    .search-label {
        display: flex;
        gap: 0 0.4em;
        flex-flow: row nowrap;
        place-items: center;
        padding: 1em;

        & > * {
            flex: 1 1 auto;
        }
    }

    .search {
        &__input {
            flex: 99 1 100px;
        }
    }
</style>
