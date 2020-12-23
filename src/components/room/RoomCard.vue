<template>
    <!-- 房间卡片 -->
    <div class="room-item">
        <div class="room-pic">
            <img :src="room.image" alt="">
        </div>
        <div class="room-info">
            <p class="room-type">{{room.type}}</p>
            <p class="room-description">{{room.description}}</p>
            <p class="room-surplus">剩余房间数：{{room.surplus}}</p>
        </div>
        <div class="room-reserve">
            <div class="room-price">
                <span>￥</span><span class="price">{{room.price}}</span>起
            </div>
            <router-link :to="{ name: 'Reserve', params: { type: room.type } }" v-if="room.surplus > 0" class="reserve">
                <button>预订</button>
            </router-link>
            <button v-else class="reserve-disable">无空闲</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RoomCard',
        props: ['room']
    }
</script>

<style lang="scss" scoped>
    .room-item {
        width: 60%;
        padding: .8rem;
        background-color: white;
        margin-top: 0.5rem;
        box-sizing: border-box;
        position: relative;
        display: flex;

        .room-pic {
            width: auto;
            height: 8rem;

            img {
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }

        p {
            margin: 0;
            color: #3f3f3f;
        }

        .room-info {
            margin-left: 1.8rem;

            .room-type {
                font-size: 20px;
                font-weight: bold;
            }

            .room-description {
                font-size: 16px;
                margin-top: .2rem;
            }

            .room-surplus {
                font-size: 14px;
                margin-top: .1rem;
            }
        }

        .room-reserve {
            position: absolute;
            right: 1rem;
            bottom: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .room-price {
                color: #515151;
                font-size: 14px;

                span {
                    font-size: 16px;
                    color: #F73B0F;
                }

                .price {
                    font-size: 28px;
                    margin-right: 0.1rem;
                }
            }

            .reserve-disable,
            .reserve button {
                width: 5rem;
                height: 2rem;
                color: white;
                border-radius: 4px;
                border: none;
                outline: none;
                background-color: #F73B0F;
                cursor: pointer;
            }

            .reserve-disable {
                background-color: #db806b;
                cursor: not-allowed;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .room-item {
            width: 100%;
            padding: .6rem;

            .room-pic {
                height: auto;

                img {
                    width: 6rem;
                    height: 6rem;
                    object-fit: cover;
                }
            }

            .room-info {
                margin-left: 1rem;
            }
        }
    }
</style>