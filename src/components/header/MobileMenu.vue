<template>
    <div class="chat-header__menu-wrapper" :class="{hide: !show}">

    </div>
</template>

<script>
    export default {
        name: 'MobileMenu',
        props: ['show']
    }
</script>

<style lang="scss" scoped>
    .chat-header__menu-wrapper {
        width: 20rem;
        height: calc(100vh - 60px);
        background-color: white;
        border-right: 1px solid #eaecef;
        transition: all .2s ease-in-out;
        transform: translateX(0);
        position: fixed;
        top: 60px;
        left: 0px;

        &.hide {
            transform: translateX(-40rem);
        }
    }
</style>