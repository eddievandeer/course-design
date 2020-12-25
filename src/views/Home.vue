<template>
    <app-header></app-header>
    <room-list></room-list>
</template>

<script>
    import AppHeader from '../components/header/AppHeader'
    import RoomList from '../components/room/RoomList.vue'

    export default {
        name: 'Home',
        components: {
            AppHeader,
            RoomList
        }
    }
</script>

<style lang="scss" scoped>

</style>