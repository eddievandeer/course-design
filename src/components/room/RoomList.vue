<template>
    <div class="room-list-wrapper">
        <room-card v-for="(item,index) in rooms" :key="index" :room="item"></room-card>
        <app-dialog :show="DialogBox.show" :type="'error'">{{DialogBox.msg}}</app-dialog>
    </div>
</template>

<script>
    import {
        reactive
    } from 'vue'
    import {
        getAllRooms
    } from '../../services/index'
    import {
        DialogBox
    } from '../../utils/index'
    import RoomCard from './RoomCard'

    export default {
        name: 'RoomList',
        components: {
            RoomCard
        },
        setup() {
            let rooms = reactive(new Array())
            getAllRooms().then((response) => {
                if (response.data.code == 200) {
                    rooms.push(...response.data.object)
                } else {
                    DialogBox.showDialog('服务器繁忙，请稍后重试')
                }
            })
            return {
                rooms,
                DialogBox
            }
        }
    }
</script>

<style lang="scss" scoped>
    .room-list-wrapper {
        width: 100%;
        background-color: #F3F3F4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>