<template>
    <div class="reserve-wrapper">
        <reserve-header></reserve-header>
        <form @submit.prevent="doReserve(orderParams)">
            <img :src="roomDetail.image">
            <div class="reserve-title">
                <p>{{roomDetail.type}}</p>
                <span>请选择房间号：</span>
            </div>
            <div class="room-environment">
                <div class="room-list">
                    <room-item v-for="item in rooms" :key="item.rid" :room="item" @click="setRid(item.rid)">
                        <input type="text" v-model="orderParams.rid" hidden>
                    </room-item>
                </div>
                <router-view></router-view>
            </div>
            <calendar :params="orderParams" @getTime="getTime"></calendar>
            <div class="order-commit">
                <div class="commit-msg">
                    <div class="price">
                        应付总额<span>￥{{orderParams.amount}}</span>
                    </div>
                    <div class="deposit">
                        定金<span>￥{{roomDetail.deposit}}</span>
                    </div>
                    <span>在{{orderParams.checkin_time!=''?orderParams.checkin_time:new Date().getFullYear()+'/'+new Date().getMonth()+'/'+new Date().getDate()}}
                        12:00之前可免费退房，超时退房不返还定金！</span>
                </div>
                <input type="submit" value="预订">
            </div>
        </form>
        <app-dialog :show="DialogBox.show" :type="DialogBox.type">{{DialogBox.msg}}</app-dialog>
    </div>
</template>

<script>
    import {
        reactive,
        onBeforeMount
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import {
        useRoute,
        useRouter
    } from 'vue-router'

    import {
        getTypeData,
        reserve
    } from '../services'

    import {
        DialogBox
    } from '../utils'

    import LoginHeader from '../components/user/LoginHeader'
    import RoomItem from '../components/reserve/RoomItem'
    import Calendar from '../components/reserve/Calendar'

    export default {
        name: 'Reserve',
        emits: ['getTime'],
        props: {
            tid: [String, Number]
        },
        components: {
            'ReserveHeader': LoginHeader,
            RoomItem,
            Calendar
        },
        setup(props) {
            // TODO: 发送post请求进行预订
            const route = useRoute()
            const store = useStore()
            const router = useRouter()
            let user = store.state.user

            let orderParams = reactive({
                rid: parseInt(route.params.rid) || 0,
                days: 0,
                checkinTime: '',
                leaveTime: '',
                amount: 0,
                deposit: 0
            })

            function setRid(rid) {
                orderParams.rid = rid
            }

            onBeforeMount(() => {
                getTypeData(props.tid).then((response) => {
                    rooms.splice(0, rooms.length)
                    if (response.data.code == 200) {
                        rooms.push(...response.data.object)
                        roomDetail.deposit = response.data.deposit
                        roomDetail.price = response.data.price
                        roomDetail.image = response.data.image
                        roomDetail.type = response.data.type
                        orderParams.deposit = roomDetail.deposit
                    }
                })
            })

            const getTime = (newValue) => {
                orderParams.days = newValue.days
                orderParams.checkinTime = newValue.checkin_time
                orderParams.leaveTime = newValue.checkout_time
                orderParams.amount = orderParams.days == 0 ? roomDetail.price : roomDetail.price * orderParams.days
            }

            function doReserve(orderParams) {
                if (orderParams.rid == 0) {
                    DialogBox.showDialog('请先选择房间号')
                } else if (orderParams.checkinTime.length == 0 || orderParams.checkinTime == '') {
                    DialogBox.showDialog('请先选择入住日期')
                } else if (orderParams.leaveTime.length == 0 || orderParams.leaveTime == '') {
                    DialogBox.showDialog('请先选择退房日期')
                } else {
                    reserve(orderParams, user.object.uid).then((response) => {
                        if (response.data.code == 200) {
                            DialogBox.showDialog(response.data.msg + '，三秒后跳转', 'success')
                            setTimeout(() => {
                                router.push('/home')
                            }, 3000)
                        } else DialogBox.showDialog(response.data.msg)
                    }).catch((error) => {
                        DialogBox.showDialog('服务器繁忙，请稍后再试')
                    })
                }
            }

            return {
                rooms,
                orderParams,
                setRid,
                doReserve,
                roomDetail,
                getTime,
                DialogBox
            }
        }
    }
    let rooms = reactive(new Array())
    let roomDetail = reactive({
        deposit: 0,
        price: 0,
        image: '',
        type: ''
    })
</script>

<style lang="scss" scoped>
    @import '../style/reserve.scss'
</style>