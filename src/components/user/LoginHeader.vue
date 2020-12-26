<template>
    <div class="login-header-wrapper">
        <button class="login-header__menu-btn" @click="back">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
    import {
        useRouter
    } from 'vue-router'

    export default {
        name: 'LoginHeader',
        setup() {
            const router = useRouter()

            function back() {
                router.push('/home')
            }

            return {
                back
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-header-wrapper {
        z-index: 10;
        width: 100%;
        height: 3.75rem;
        box-sizing: border-box;
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;

        .login-header__menu-btn {
            width: 1.8rem;
            height: 1.8rem;
            color: #fff;
            font-size: 28px;
            margin-left: 1.5rem;
            background-color: transparent;
        }
    }
</style>