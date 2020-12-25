<template>
    <div class="dialog-wrapper" v-if="show">
        <div class="dialog" :class="type">
            <div class="dialog-icon" :class="type">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            </div>
            <span class="content">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppDialog',
        props: {
            show: Boolean,
            type: String
        }
    }
</script>

<style lang="scss" scoped>
    .dialog-wrapper {
        z-index: 10;
        position: fixed;
        top: 1.2rem;
        left: 50%;
        transform: translateX(-50%);

        .dialog {
            height: 3rem;
            border-radius: 4px;
            padding: 0 1rem;
            background-color: white;
            display: flex;
            align-items: center;

            &.error {
                border: 1px solid #fde2e2;
                background-color: #FEF0F0;
            }

            .dialog-icon {
                font-size: 14px;
                margin-right: 0.6rem;

                &.error {
                    color: #D95C5C;
                }
            }
        }
    }
</style>