<script setup lang="ts">
    const { result } = storeToRefs(useLookupStore())
</script>

<template>
    <div class="results">
        <div v-auto-animate class="grid-content | results-grid">
            <WordCard
                v-if="result.length"
                v-for="{ item } in result"
                :key="item.id"
                v-bind="item"
            />

            <div v-else class="results-empty">
                <p>
                    <span>{{ Japanese.toFull("( ╹ -╹)?") }}</span>
                    Results is empty
                </p>
            </div>
        </div>

        <div class="results-end">
            <h3>ー　結果終了　ー</h3>
        </div>
    </div>
</template>

<style lang="scss">
    @use "~/assets/css/layers";

    .results {
        // &:has(.results-grid:empty) {
        //     display: none;
        // }

        @include layers.flow();

        &-grid {
            grid-auto-rows: 1fr;
        }

        &-empty {
            padding: 1em 1em 0.8em;
            border: var(--global-border);
            border-radius: var(--global-border-radius);

            background: hsl(0 60% 10%);
        }

        &-end {
            text-align: center;
            font-size: 0.6em;
            color: lightgreen;
        }
    }
</style>
