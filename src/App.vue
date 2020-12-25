<template>
    <router-view></router-view>
</template>

<script>
    import {
        useStore
    } from 'vuex'

    export default {
        name: 'App',
        setup() {
            let user = localStorage.getItem('user')
            if (user && user !== 'undefined') {
                const store = useStore()
                const userData = JSON.parse(user)
                store.commit('SET_USER_DATA', userData)
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
</style>