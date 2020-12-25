<template>
    <div class="loading-wrapper" v-if="show">
        <div class="mask"></div>
        <div class="loading">
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            <span class="content">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            show: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .loading-wrapper {
        z-index: 10;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;

        .mask {
            z-index: 10;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }

        .loading {
            z-index: 20;
            width: 12rem;
            height: 12rem;
            color: white;
            border-radius: 10px;
            background-color: rgba($color: #000000, $alpha: .5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .content {
                font-size: 18px;
                margin-top: 1rem;
            }
        }
    }
</style>