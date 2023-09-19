<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Icon } from '@iconify/vue'
import { getQuartet, status } from '@/supabase'
import { fetchFromDict } from '@/fuse/index'

const searchQuery: Ref<string> = ref('good')

function clearSearchQuery() {
    searchQuery.value = ''
}
</script>

<template>
    <div class="test">
        <input @click.prevent="fetchFromDict(searchQuery)" type="button" value="Search Fuse" />
    </div>
    <div class="search | flex flex-col-nowrap flex-gap-10 | padding-40 margin-auto width-20">
        <div class="search-container | flex flex-row-nowarp flex-gap-10">
            <div
                class="search-input-container | flex flex-row-nowrap flex-center-center | padding-left-30 | light-shade border-20 focus-within">
                <Icon icon="tabler:search" />
                <input
                    v-model="searchQuery"
                    @keypress.enter.prevent="getQuartet(searchQuery)"
                    class="search-box | margin-40 margin-left-20 | width-full height-full | text-n"
                    type="text"
                    placeholder="Search word..."
                    :disabled="status === 'fetch' ? true : false" />
            </div>

            <div class="search-button-container | light-shade border-20 focus-within">
                <input
                    @click.prevent="getQuartet(searchQuery)"
                    class="width-full height-full | text-n | padding-20 padding-left-40 padding-right-40 cursor-pointer"
                    type="button"
                    value="Go!"
                    :disabled="status === 'fetch' ? true : false" />
            </div>
        </div>

        <div class="search-options-container | flex flex-row-wrap">
            <div class="search-options-container__item | relative">
                <ul class="search-options | flex flex-row-wrap">
                    <li>
                        <a @click="clearSearchQuery()" href="#">clear</a>
                    </li>
                </ul>
            </div>

            <div class="search-options-container__item | relative">
                <ul class="search-other | flex flex-row-wrap">
                    <li class="loading-overlay" :status="status">status:</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$input-padding: 0.7rem;

:root[data-theme='dark'] {
    --component-background-color: #40464d;
    --component-background-color-active: #636f7a;
    --component-background-color-disabled: #2d333a;
    --component-font-color-disabled: #546572;
    --component-placeholder-color: #b0b6bd;
    --component-border-color: #5d7280;
    --component-border-radius: 5px;
    --status-loading: #fafa59;
    --status-ok: #90ee90;
}

// ================ //
//		BLOCK		//
// ================ //
.light-shade {
    background: var(--component-background-color);
}

.search {
    &-container {
        .search-box {
            &::placeholder {
                color: var(--component-placeholder-color);
            }
        }
    }

    &-input-container,
    &-button-container,
    &-select-container {
        transition:
            transform ease 100ms,
            background ease 200ms;

        &:has(:disabled) {
            background: var(--component-background-color-disabled);
            color: var(--component-font-color-disabled);
        }
    }

    &-input-container {
        flex: 1 60%;
    }

    &-button-container {
        flex: 0 1 80px;

        &:is(:active) {
            transform: scale(0.9);
        }

        &:is(:hover, :focus) {
            background: var(--component-background-color-active);
        }

        input {
            background: transparent;
        }
    }

    &-select-container {
        flex: 0 1 90px;
        select {
            text-align: center;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: '';

            option {
                background: var(--component-background-color);
                text-align: center;
            }
        }
    }

    &-options-container {
        margin-inline: 3rem;
        gap: 0 2rem;
    }

    &-options,
    &-other {
        gap: 0 0.5rem;

        &::after {
            --border-thickness: 2px;

            content: '';
            position: absolute;
            border-left: var(--border-thickness) solid var(--component-border-color);
            border-bottom: var(--border-thickness) solid var(--component-border-color);
            border-bottom-left-radius: 3px;
            width: 0.5rem;
            height: 0.5rem;
            margin-left: -1.15rem;
            margin-top: 0.25rem;
            left: 0;
            top: 0;
            aspect-ratio: 1;
        }
    }
}

.loading-overlay {
    text-decoration: none;

    &::after {
        margin-left: 0.5rem;
    }

    &[status='fetch'] {
        color: var(--status-loading);

        &::after {
            content: 'fetching...';
        }
    }

    &[status='ok'] {
        color: var(--status-ok);

        &::after {
            content: 'ok';
        }
    }
}
</style>
