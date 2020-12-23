<template>
    <div class="room-list-wrapper">
        <room-card v-for="(item,index) in rooms" :key="index" :room="item"></room-card>
    </div>
</template>

<script>
    import {
        reactive
    } from 'vue'
    import RoomCard from './RoomCard'

    export default {
        components: {
            RoomCard
        },
        name: 'RoomList',
        setup() {
            let rooms = reactive([{
                    type: '高级间',
                    description: '大床  26㎡  有窗',
                    image: 'https://i.loli.net/2020/12/21/Vx9HfIBCRbTDvKc.jpg',
                    price: 658,
                    surplus: 10
                },
                {
                    type: '高级间',
                    description: '大床  26㎡  有窗',
                    image: 'https://i.loli.net/2020/12/21/Vx9HfIBCRbTDvKc.jpg',
                    price: 658,
                    surplus: 0
                },
                {
                    type: '高级间',
                    description: '大床  26㎡  有窗',
                    image: 'https://i.loli.net/2020/12/21/Vx9HfIBCRbTDvKc.jpg',
                    price: 658,
                    surplus: 10
                },
                {
                    type: '高级双床房',
                    description: '双床  30㎡  有窗',
                    image: 'https://i.loli.net/2020/12/21/Vx9HfIBCRbTDvKc.jpg',
                    price: 658,
                    surplus: 10
                },
                {
                    type: '高级间',
                    description: '大床  26㎡  有窗',
                    image: 'https://i.loli.net/2020/12/21/Vx9HfIBCRbTDvKc.jpg',
                    price: 658,
                    surplus: 10
                }
            ])

            return {
                rooms
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