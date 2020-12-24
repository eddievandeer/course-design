<template>
    <div class="login-controller-wrapper">
        <div class="logo">
            <i class="fa fa-building-o" aria-hidden="true"></i>
            <span>乾园大酒店</span>
        </div>
        <div class="main">
            <div class="controller-btns">
                <router-link to="login">
                    <input class="controller-btn" :class="{active: mark == '/login'}" type="button" value="登录" />
                </router-link>
                <router-link to="register">
                    <input class="controller-btn" :class="{active: mark == '/register'}" type="button" value="注册" />
                </router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'
    import {
        useRoute,
        onBeforeRouteUpdate
    } from 'vue-router'
    export default {
        name: 'LoginController',
        setup() {
            let mark = ref('')
            let route = useRoute()
            mark.value = route.path

            onBeforeRouteUpdate((to) => {
                mark.value = to.path
            });

            return {
                mark
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/values.scss';

    .login-controller-wrapper {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(to right, #4888FE, #55C7F1);
        @extend .flex;

        .logo {
            width: 100%;
            height: 8.75rem;
            color: white;
            @extend .flex;

            i {
                font-size: 88px;
            }

            span {
                font-size: 28px;
                margin-top: .2rem;
                margin-bottom: 2rem;
            }
        }

        .main {
            width: auto;
            padding: 0.5rem 3rem 4rem 3rem;
            border-radius: .8rem;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;

            .controller-btns {
                width: $other-width;
                height: 3rem;
                margin-bottom: 1.5rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;

                a {
                    width: $other-width;

                    .controller-btn {
                        width: 100%;
                        height: 3rem;
                        color: #8F95B0;
                        font-size: 17px;
                        border: none;
                        outline: none;
                        box-sizing: border-box;
                        border-bottom: 1px solid #CDCDCD;
                        background-color: transparent;
                        cursor: pointer;

                        &.active {
                            color: #498EFD;
                            border-bottom: 4px solid #498EFD;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 426px) {
            & {
                display: block;
                position: relative;

                .logo {
                    height: 13.75rem;

                    span {
                        margin-bottom: 0;
                    }
                }

                .main {
                    width: 100%;
                    height: calc(100vh - 13.75rem);
                    padding: 0.5rem 0 0 0;
                    border-radius: 1.6rem 1.6rem 0 0;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
</style>