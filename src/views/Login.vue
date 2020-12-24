<template>
    <login-header></login-header>
    <login-controller></login-controller>
</template>

<script>
    import LoginHeader from '../components/user/LoginHeader'
    import LoginController from '../components/user/LoginController'

    export default {
        name: 'Login',
        components: {
            LoginHeader,
            LoginController
        }
    }
</script>

<style lang="scss" scoped>

</style>