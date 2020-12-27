<template>
    <div class="room-item">
        <slot></slot>
        <router-link :to="{ name: 'RoomDetail', params: { rid: room.rid } }">
            <button class="room-item-btn">{{room.rid}}</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'RoomItem',
        props: {
            room: Object
        }
    }
</script>

<style lang="scss" scoped>
    .room-item {
        width: 4.5rem;
        height: 2rem;
        cursor: pointer;
        margin-bottom: 0.5rem;

        a {
            width: 100%;
            height: 100%;

            .room-item-btn {
                width: 100%;
                height: 100%;
                color: #636363;
                border: 1px solid #D1D1D1;
                border-radius: 3px;
            }

            &.router-link-active .room-item-btn,
            &.router-link-exact-active .room-item-btn {
                color: #3DB3FC;
                border: 1px solid #3DB3FC;
            }
        }
    }
</style>