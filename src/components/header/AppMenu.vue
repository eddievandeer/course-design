<template>
    <!-- 顶部菜单栏 -->
    <div class="menu-wrapper" :class="{solid: !transparent}">
        <div class="chat-header__left-menu">
            <button class="chat-header__left-menu-btn" @click="menuToggle()">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <mobile-menu :show="show"></mobile-menu>
        </div>
        <div class="chat-header__left">
            <div class="chat-header__left-item">
                <router-link to="home">首页</router-link>
            </div>
            <div class="chat-header__left-item">
                <router-link to="comment">点评</router-link>
            </div>
            <div class="chat-header__left-item" v-if="user">
                <router-link to="mine">我的</router-link>
            </div>
        </div>
        <div class="chat-header__right">
            <router-link to="login" v-if="!user">
                <button class="chat-header__login-btn">Login</button>
            </router-link>
            <button class="chat-header__logout-btn" v-else @click="doLogout">Logout</button>
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

    import MobileMenu from './MobileMenu'

    export default {
        name: 'AppMenu',
        props: ['transparent'],
        components: {
            MobileMenu
        },
        setup() {
            // TODO: pc端和手机端的菜单设置
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
                // .then((response) => {
                //     isLoading.value = false
                //     if (response.data.code != 200) {
                //         DialogBox.showDialog(response.data.msg)
                //     } else {
                //         router.push('home')
                //     }
                // })
                router.push('login')
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
    .menu-wrapper {
        z-index: 10;
        width: 100%;
        height: 3.75rem;
        box-sizing: border-box;
        background-color: transparent;
        transition: all .2s ease-in-out;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0rem;
        left: 0px;

        &.solid {
            background-color: white;
            border-bottom: 1px solid #d1d1d1;

            .chat-header__left .chat-header__left-item {
                a {
                    color: #636363;

                    &.router-link-active,
                    &.router-link-exact-active {
                        box-shadow: 0 2px 0 0 #498EFD, inset 0 -2px 0 0 #498EFD;
                    }
                }
            }

            .chat-header__left-menu .chat-header__left-menu-btn,
            .chat-header__login-btn,
            .chat-header__logout-btn {
                color: #636363;
            }

            .chat-header__login-btn,
            .chat-header__logout-btn {
                border: 1px solid #d1d1d1;
            }
        }

        .chat-header__left {
            width: 20rem;
            height: 100%;
            margin-left: 6rem;
            display: flex;
            align-items: center;

            .chat-header__left-item {
                width: 33%;
                height: 100%;
                cursor: pointer;

                a {
                    width: 100%;
                    height: 100%;
                    color: white;
                    text-decoration: none;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &.router-link-active,
                    &.router-link-exact-active {
                        box-shadow: 0 2px 0 0 white, inset 0 -2px 0 0 white;
                    }
                }
            }
        }

        .chat-header__left-menu {
            width: 30%;
            display: none;

            .chat-header__left-menu-btn {
                width: 1.8rem;
                height: 1.8rem;
                color: #fff;
                font-size: 28px;
                margin-left: 1.5rem;
                background-color: transparent;
            }
        }

        .chat-header__login-btn,
        .chat-header__logout-btn {
            width: 4.8rem;
            height: 3rem;
            color: #fff;
            font-size: 20px;
            margin-right: 1.5rem;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 0.5rem;
            cursor: pointer;
        }

        @media screen and (max-width: 768px) {
            .chat-header__left-menu {
                display: block;
            }

            .chat-header__left {
                display: none;
            }
        }
    }
</style>