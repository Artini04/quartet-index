<template>
    <footer class="grid | footer">
        <div class="grid-item-content | footer-content">
            <div class="footer-links">
                <ControlIconLink
                    label="Github"
                    icon="tabler:brand-github"
                    href="https://github.com/Artini04/quartet-index"
                />
                <ControlIconLink
                    label="Issues / Suggestions"
                    icon="tabler:circle-dot"
                    href="https://github.com/Artini04/quartet-index/issues"
                />
            </div>

            <div class="footer-mark">
                <p class="footer__mark">
                    <span>{{ new Date().getFullYear() }}</span>
                    <span>&nbsp;//&nbsp;</span>
                    <ControlIconLink
                        label="@artini04"
                        href="https://github.com/Artini04"
                    />
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .footer {
        color: var(--global-font-color-dim);

        &-content {
            display: flex;
            flex-flow: row nowrap;

            & > * {
                flex: 1 1 auto;
            }
        }

        &-links {
            display: flex;
            flex-flow: column nowrap;
        }

        &-mark {
            text-align: right;
        }
    }
</style>
