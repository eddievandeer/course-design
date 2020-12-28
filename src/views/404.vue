<template>
    <page-header></page-header>
    <div class="container">
        <div class="message-title">404</div>
        <div class="message">找不到此页面! :(</div>
    </div>
</template>

<script>
    import LoginHeader from '../components/user/LoginHeader'

    export default {
        name: '404',
        components: {
            'PageHeader': LoginHeader
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(to right, #4888FE, #55C7F1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .message-title {
            color: aliceblue;
            font-size: 60px;
        }

        .message {
            color: aliceblue;
            font-size: 38px;
        }
    }
</style>