<template>
    <div class="mine-wrapper">
        <mine-header></mine-header>
        <div class="container">
            <section class="detail-wrarpper">
                <div class="mine-top"></div>
                <section class="detail-wrapper">
                    <div class="user-avatar">
                        <svg t="1609122452603" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3085" width="80" height="80">
                            <path
                                d="M511.626 1.896C229.572 1.896 0.927 230.541 0.927 512.595c0 282.055 228.645 510.699 510.699 510.699s510.698-228.645 510.698-510.699S793.68 1.896 511.626 1.896z m0 69.641c243.606 0 441.058 197.474 441.058 441.058 0 87.347-25.392 168.762-69.194 237.271-73.419-77.609-170.944-132.204-280.597-151.829 70.004-33.755 118.404-105.164 118.404-188.066 0-115.388-93.535-208.922-208.923-208.922S303.452 294.583 303.452 409.97c0 82.902 48.399 154.311 118.403 188.066-110.093 19.704-207.96 74.661-281.479 152.77-44.177-68.704-69.808-150.465-69.808-238.211 0-243.584 197.496-441.058 441.058-441.058z"
                                p-id="3086" fill="#ffffff"></path>
                        </svg>
                    </div>
                    <div class="user-detail">
                        <div class="user-name">{{user.object.username}}</div>
                        <div class="user-tel">tel: {{user.object.phone}}</div>
                        <div class="certification" v-if="user.object.realname">已实名</div>
                    </div>
                </section>
                <section class="user-wallet">
                    <div class="wallet-title">
                        <span>我的钱包</span>
                        <button class="recharge" @click="showRecharge">去充值></button>
                    </div>
                    <div class="recharge-container" v-if="show">
                        <div class="recharge-box">
                            <button class="close" @click="hideRecharge"><i class="fa fa-times"
                                    aria-hidden="true"></i></button>
                            <span>请输入充值金额</span>
                            <input type="text" v-model="amount">
                            <button @click="doRecharge(user.object.uid, amount)">充值</button>
                        </div>
                    </div>
                    <div class="wallet-detal">
                        <div class="wallet-item">
                            <p>{{user.object.money+'.00'}}</p>
                            <span>现金金额(元)</span>
                        </div>
                        <div class="wallet-item">
                            <p>0.00</p>
                            <span>礼品卡(元)</span>
                        </div>
                        <div class="wallet-item">
                            <p>369</p>
                            <span>用户积分</span>
                        </div>
                    </div>
                </section>
            </section>
            <section class="order-list">
                <div class="order-title">
                    <span>我的订单</span>
                </div>
                <div class="order-item" v-for="order in orders" :key="order.oid">
                    <div class="order-type">
                        <span>{{order.type}}</span>
                        <span class="order-status">{{checkStatus(order.status)}}</span>
                    </div>
                    <div class="order-time">
                        <span>{{order.checkinTime+'至'+order.leaveTime}}</span>
                        <span>共住{{order.days}}天</span>
                    </div>
                    <div class="order-amount">
                        合计<span>￥{{order.amount}}</span>
                    </div>
                    <div class="order-controller">
                        <button class="controller-btn" :class="{disable: order.status>=3}"
                            @click="doCheckout(order.status<3,order.oid)">退房</button>
                        <button class="controller-btn" :class="{disable: order.status>=3}"
                            @click="cancelOrder(order.status<3,order.oid)">退订</button>
                        <button class="controller-btn" :class="{disable: order.status<3}"
                            @click="deleteOrder(order.status>=3, order.oid)">删除订单</button>
                    </div>
                    <div class="order-generation">
                        <span>订单生成时间：{{order.orderTime}}</span>
                    </div>
                </div>
                <div class="no-order" v-if="orders.length==0">暂无订单</div>
            </section>
            <div class="user-logout" @click="doLogout">退出登录</div>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        ref
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import {
        useRouter
    } from 'vue-router'

    import {
        logs,
        cancel,
        remove,
        checkout,
        recharge,
        showme
    } from '../services'

    import LoginHeader from '../components/user/LoginHeader'

    export default {
        name: 'Mine',
        components: {
            'MineHeader': LoginHeader
        },
        setup() {
            const store = useStore()
            const router = useRouter()

            let show = ref(false)

            let amount = ref('')

            let user = reactive({
                object: store.state.user.object
            })
            getLogs(user.object.uid)

            const checkStatus = (status) => {
                let orderStatus = ''
                if (status == 0) {
                    orderStatus = '已预订'
                } else if (status == 1) {
                    orderStatus = '已入住'
                } else if (status == 2) {
                    orderStatus = '待评论'
                } else if (status == 3) {
                    orderStatus = '已退房'
                } else if (status == 4) {
                    orderStatus = '已取消'
                }

                return orderStatus
            }

            const cancelOrder = (able, oid) => {
                if (able) {
                    cancel(oid).then((response) => {
                        if (response.data.code == 200) {
                            getLogs(user.object.uid)
                        }
                    })
                }
            }

            const doLogout = () => {
                store.dispatch('doLogout')
                router.push('home')
            }

            const deleteOrder = (able, oid) => {
                if (able) {
                    remove(oid).then((response) => {
                        if (response.data.code == 200) {
                            getLogs(user.object.uid)
                        }
                    })
                }
            }

            const doCheckout = (able, oid) => {
                if (able) {
                    checkout(oid).then((response) => {
                        if (response.data.code == 200) {
                            getLogs(user.object.uid)
                        }
                    })
                }
            }

            const doRecharge = (uid, amount) => {
                console.log(uid, amount);
                recharge(uid, parseInt(amount)).then((response) => {
                    if (response.data.code == 200) {
                        show.value = false
                        showme(uid).then((result) => {
                            store.commit('SET_USER_DATA', result.data)
                            user.object = store.state.user.object
                        })
                    }
                })
            }

            const showRecharge = () => {
                show.value = true
            }

            const hideRecharge = () => {
                show.value = false
            }

            return {
                user,
                orders,
                checkStatus,
                cancelOrder,
                deleteOrder,
                doCheckout,
                doLogout,
                show,
                amount,
                showRecharge,
                hideRecharge,
                doRecharge
            }
        }
    }
    let orders = reactive(new Array())

    const getLogs = (uid) => {
        logs(uid).then((response) => {
            if (response.data.code == 200) {
                orders.splice(0, orders.length)
                orders.push(...response.data.object)
            }
        })
    }
</script>

<style lang="scss" scoped>
    @import '../style/mine.scss';
</style>