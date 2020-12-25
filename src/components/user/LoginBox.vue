<template>
    <div class="login-main">
        <form @submit.prevent="doLogin(userParams)">
            <div class="user-info__wrapper-item">
                <svg t="1608690354683" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="5302" width="21" height="21">
                    <path
                        d="M100.218036 795.96002l262.909977-142.960987v-8.369c-112.27799-85.775992-127.619989-240.592979-127.619989-364.724968A251.053978 251.053978 0 0 1 506.786 0.95709h9.065A251.749978 251.749978 0 0 1 787.129976 279.905065c0 126.921989-15.341999 278.948975-127.619989 367.514968v8.367999L921.721964 798.75002a69.736994 69.736994 0 0 1 36.960997 62.065994v93.447992A69.736994 69.736994 0 0 1 888.944967 1024h-755.949934a69.736994 69.736994 0 0 1-69.736994-69.736994v-96.236991a69.736994 69.736994 0 0 1 36.959997-62.065995z m216.882981-521.633954c0 120.644989 12.551999 252.448978 109.486991 313.816972a43.236996 43.236996 0 0 1 18.828998 35.565997v69.736994c0 14.644999-11.854999 28.591997-36.959997 41.841996a1457.504872 1457.504872 0 0 0-255.237977 135.987988v73.920994h714.804937v-76.012993A1711.34785 1711.34785 0 0 0 614.179991 733.196026q-37.657997-20.222998-37.657997-41.841997v-69.736994a42.539996 42.539996 0 0 1 19.525999-35.565997c94.842992-59.275995 109.48699-191.079983 109.48699-311.724972A170.158985 170.158985 0 0 0 515.851 80.457083h-9.065c-126.224989 0-189.684983 65.552994-189.684983 193.869983z"
                        fill="#888888" p-id="5303"></path>
                </svg>
                <input class="user-info" :class="{error: check.nameEmpty}" type="text" v-model="userParams.username"
                    placeholder="请输入用户名/手机号" @blur="checkNameEmpty">
                <p v-if="check.nameEmpty" class="empty">用户名/手机号不能为空</p>
            </div>
            <div class="user-info__wrapper-item">
                <svg t="1608690318384" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4507" width="22" height="22">
                    <path
                        d="M786.673 428.454c40.237 0 72.885 32.707 72.885 72.945v340.329a72.885 72.885 0 0 1-72.885 73.005h-534.89a72.885 72.885 0 0 1-72.884-72.945v-340.33c0-40.357 32.587-73.004 72.885-73.004h534.889m0-72.885h-534.89a145.89 145.89 0 0 0-145.89 145.83v340.329a145.89 145.89 0 0 0 145.89 145.89h534.83a145.89 145.89 0 0 0 145.89-145.83v-340.33a145.89 145.89 0 0 0-145.89-145.89zM519.228 88.124A170.165 170.165 0 0 1 689.393 258.29v97.28h-340.33v-97.28A170.165 170.165 0 0 1 519.229 88.124m0-72.884a243.11 243.11 0 0 0-243.11 243.049v170.165h486.28V258.409a243.11 243.11 0 0 0-243.17-243.29z m0 765.77a36.442 36.442 0 0 1-36.442-36.442v-145.89a36.442 36.442 0 0 1 72.885 0v145.89c0 20.12-16.264 36.383-36.443 36.383v0.06z"
                        fill="#888888" p-id="4508"></path>
                </svg>
                <input class="user-info" :class="{error: check.pwdEmpty}" type="password" v-model="userParams.password"
                    placeholder="请输入用户密码" @blur="checkPwdEmpty">
                <p v-if="check.pwdEmpty" class="empty">用户密码不能为空</p>
            </div>
            <p class="forget">忘记密码？</p>
            <input type="submit" value="登录">
            <app-dialog :show="DialogBox.show" :type="'error'">{{DialogBox.msg}}</app-dialog>
        </form>
        <loading :show="isLoading">正在登录...</loading>
    </div>
</template>

<script>
    import {
        ref,
        reactive
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    import {
        useRouter
    } from 'vue-router'
    import {
        login
    } from '../../services/index'
    import {
        DialogBox
    } from '../../utils/index'
    import Loading from '../common/Loading'
    import AppDialog from '../common/AppDialog'

    export default {
        name: 'LoginBox',
        components: {
            AppDialog,
            Loading
        },
        setup() {
            const store = useStore()
            const router = useRouter()
            let isLoading = ref(false)

            function doLogin(userParams) {
                if (userParams.username && userParams.password) {
                    isLoading.value = true
                    // 分发登录Action，发送登录请求
                    store.dispatch('doLogin', userParams)
                        .then((response) => {
                            isLoading.value = false
                            if (response.data.code != 200) {
                                DialogBox.showDialog(response.data.msg)
                            } else {
                                router.push('home')
                            }
                        })
                        .catch((error) => {
                            isLoading.value = false
                            if (error.response && error.response.status == 500) {
                                DialogBox.showDialog('服务器繁忙，请稍后重试')
                            } else {
                                console.log(error);
                            }
                        })
                } else {
                    checkNameEmpty()
                    checkPwdEmpty()
                }
            }

            return {
                check,
                userParams,
                checkNameEmpty,
                checkPwdEmpty,
                doLogin,
                isLoading,
                DialogBox
            }
        }
    }

    let check = reactive({
        nameEmpty: false,
        pwdEmpty: false
    })

    let userParams = reactive({
        username: '',
        password: ''
    })

    function checkNameEmpty() {
        if (userParams.username.length == 0 || userParams.username == null) {
            check.nameEmpty = true
        } else {
            check.nameEmpty = false
        }
    }

    function checkPwdEmpty() {
        if (userParams.password.length == 0 || userParams.password == null) {
            check.pwdEmpty = true
        } else {
            check.pwdEmpty = false
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/login.scss';
</style>