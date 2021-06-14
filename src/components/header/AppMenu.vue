<template>
    <!-- 顶部菜单栏 -->
    <div class="menu-wrapper" :class="{solid: !transparent}">
        <div class="menu-header__left">
            <div class="menu-header__left-item">
                <router-link to="home">首页</router-link>
            </div>
            <!-- <div class="menu-header__left-item">
                <router-link to="comment">点评</router-link>
            </div> -->
        </div>
        <div class="menu-header__right">
            <div class="user-con">
                <div class="user-avatar" @click="menuToggle">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                </div>
                <div class="van-popover" v-if="show">
                    <div class="sign-in" v-if="user">
                        <router-link to="mine">
                            <div class="sign-in-btn">
                                <i class="fa fa-user-o" aria-hidden="true"></i>个人中心
                            </div>
                        </router-link>
                        <router-link to="login">
                            <div class="sign-in-btn" @click="doLogout">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>退出
                            </div>
                        </router-link>
                    </div>
                    <div class="not-sign-in" v-else>
                        <router-link to="login">
                            <button class="menu-header-btn login">登录</button>
                        </router-link>
                        <router-link to="register">
                            <button class="menu-header-btn register">注册</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import {
        useRouter
    } from 'vue-router'

    export default {
        name: 'AppMenu',
        props: ['transparent'],
        setup() {
            const store = useStore()
            const router = useRouter()
            let user = store.state.user

            let show = ref(false)

            function menuToggle() {
                // 切换菜单的显示和隐藏
                show.value = !show.value
            }

            function doLogout() {
                store.dispatch('doLogout')
            }

            return {
                user,
                show,
                menuToggle,
                doLogout
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/menu.scss';
</style>