<template>
    <div class="register-main">
        <form @submit.prevent="doRegister(userParams)">
            <div class="user-info__wrapper-item">
                <svg t="1608690354683" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="5302" width="21" height="21">
                    <path
                        d="M100.218036 795.96002l262.909977-142.960987v-8.369c-112.27799-85.775992-127.619989-240.592979-127.619989-364.724968A251.053978 251.053978 0 0 1 506.786 0.95709h9.065A251.749978 251.749978 0 0 1 787.129976 279.905065c0 126.921989-15.341999 278.948975-127.619989 367.514968v8.367999L921.721964 798.75002a69.736994 69.736994 0 0 1 36.960997 62.065994v93.447992A69.736994 69.736994 0 0 1 888.944967 1024h-755.949934a69.736994 69.736994 0 0 1-69.736994-69.736994v-96.236991a69.736994 69.736994 0 0 1 36.959997-62.065995z m216.882981-521.633954c0 120.644989 12.551999 252.448978 109.486991 313.816972a43.236996 43.236996 0 0 1 18.828998 35.565997v69.736994c0 14.644999-11.854999 28.591997-36.959997 41.841996a1457.504872 1457.504872 0 0 0-255.237977 135.987988v73.920994h714.804937v-76.012993A1711.34785 1711.34785 0 0 0 614.179991 733.196026q-37.657997-20.222998-37.657997-41.841997v-69.736994a42.539996 42.539996 0 0 1 19.525999-35.565997c94.842992-59.275995 109.48699-191.079983 109.48699-311.724972A170.158985 170.158985 0 0 0 515.851 80.457083h-9.065c-126.224989 0-189.684983 65.552994-189.684983 193.869983z"
                        fill="#888888" p-id="5303"></path>
                </svg>
                <input class="user-info" :class="{error: check.nameEmpty}" type="text" v-model="userParams.username"
                    placeholder="请输入用户名" @blur="checkEmpty('username', 'nameEmpty')">
                <p v-if="check.nameEmpty" class="empty">用户名不能为空</p>
            </div>
            <div class="user-info__wrapper-item">
                <svg t="1608730725151" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4202" width="22" height="22">
                    <path
                        d="M438.648604 528.270222a164.551111 164.551111 0 0 1-47.530666-116.252444 157.212444 157.212444 0 1 1 314.254222 0 164.750222 164.750222 0 0 1-47.530667 116.252444A238.734222 238.734222 0 0 1 777.905493 736.711111a36.295111 36.295111 0 1 1-72.533333 0 157.212444 157.212444 0 1 0-314.254222 0 36.295111 36.295111 0 1 1-72.533334 0 238.705778 238.705778 0 0 1 120.064-208.497778z m-228.835555 21.134222H64.60416a37.461333 37.461333 0 0 1 0-74.865777h145.066667a37.461333 37.461333 0 0 1 0 74.865777z m0-162.332444H64.60416a37.461333 37.461333 0 0 1 0-74.865778h145.066667a37.461333 37.461333 0 0 1 0 74.865778z m0 324.664889H64.60416a37.461333 37.461333 0 0 1 0-74.865778h145.066667a37.461333 37.461333 0 0 1 0 74.865778zM866.737493 1024H229.837938a131.242667 131.242667 0 0 1-128.853334-133.148444v-91.648a36.295111 36.295111 0 1 1 72.533334 0v91.619555a57.258667 57.258667 0 0 0 56.32 58.168889h636.899555a57.287111 57.287111 0 0 0 56.32-58.112V133.063111a57.258667 57.258667 0 0 0-56.32-58.197333H229.837938a57.258667 57.258667 0 0 0-56.32 58.112V224.711111a36.295111 36.295111 0 1 1-72.533334 0V133.091556a131.157333 131.157333 0 0 1 128.853334-133.12h636.899555a131.185778 131.185778 0 0 1 128.853334 133.12v757.731555a131.185778 131.185778 0 0 1-128.853334 133.12z m-318.577777-699.335111a87.466667 87.466667 0 1 0 84.622222 87.409778 86.129778 86.129778 0 0 0-84.622222-87.409778z"
                        fill="#888888" p-id="4203"></path>
                </svg>
                <input class="user-info" :class="{error: check.realEmpty}" type="text" v-model="userParams.realname"
                    placeholder="请输入真实姓名" @blur="checkEmpty('realname', 'realEmpty')">
                <p v-if="check.realEmpty" class="empty">真实姓名不能为空</p>
            </div>
            <div class="user-info__wrapper-item">
                <svg t="1608731030049" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="6331" width="22" height="22">
                    <path
                        d="M256 42.666667h512a85.333333 85.333333 0 0 1 85.333333 85.333333v768a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333V128a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 64a21.333333 21.333333 0 0 0-21.333333 21.333333v768a21.333333 21.333333 0 0 0 21.333333 21.333333h512a21.333333 21.333333 0 0 0 21.333333-21.333333V128a21.333333 21.333333 0 0 0-21.333333-21.333333H256z m256 757.333333a53.333333 53.333333 0 1 1 0-106.666667 53.333333 53.333333 0 0 1 0 106.666667zM448 170.666667h128a21.333333 21.333333 0 0 1 0 42.666666h-128a21.333333 21.333333 0 0 1 0-42.666666z"
                        fill="#888888" p-id="6332"></path>
                </svg>
                <input class="user-info" :class="{error: check.telEmpty}" type="text" placeholder="请输入手机号"
                    v-model="userParams.phone" @blur="checkEmpty('phone', 'telEmpty')">
                <p v-if="check.telEmpty" class="empty">手机号不能为空</p>
            </div>
            <div class="user-info__wrapper-item">
                <svg t="1608690318384" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4507" width="22" height="22">
                    <path
                        d="M786.673 428.454c40.237 0 72.885 32.707 72.885 72.945v340.329a72.885 72.885 0 0 1-72.885 73.005h-534.89a72.885 72.885 0 0 1-72.884-72.945v-340.33c0-40.357 32.587-73.004 72.885-73.004h534.889m0-72.885h-534.89a145.89 145.89 0 0 0-145.89 145.83v340.329a145.89 145.89 0 0 0 145.89 145.89h534.83a145.89 145.89 0 0 0 145.89-145.83v-340.33a145.89 145.89 0 0 0-145.89-145.89zM519.228 88.124A170.165 170.165 0 0 1 689.393 258.29v97.28h-340.33v-97.28A170.165 170.165 0 0 1 519.229 88.124m0-72.884a243.11 243.11 0 0 0-243.11 243.049v170.165h486.28V258.409a243.11 243.11 0 0 0-243.17-243.29z m0 765.77a36.442 36.442 0 0 1-36.442-36.442v-145.89a36.442 36.442 0 0 1 72.885 0v145.89c0 20.12-16.264 36.383-36.443 36.383v0.06z"
                        fill="#888888" p-id="4508"></path>
                </svg>
                <input class="user-info" :class="{error: check.pwdEmpty}" type="password" v-model="userParams.password"
                    placeholder="请输入密码" @blur="checkEmpty('password', 'pwdEmpty')">
                <p v-if="check.pwdEmpty" class="empty">密码不能为空</p>
            </div>
            <input type="submit" value="注册">
            <app-dialog :show="DialogBox.show" :type="DialogBox.type">{{DialogBox.msg}}</app-dialog>
        </form>
        <loading :show="isLoading">正在提交...</loading>
    </div>
</template>

<script>
    import {
        reactive,
        ref
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'
    import {
        register
    } from '../../services/index'
    import {
        DialogBox
    } from '../../utils/index'

    export default {
        name: 'RegisterBox',
        props: ['type'],
        setup() {
            const router = useRouter()
            let isLoading = ref(false)

            function doRegister(userParams) {
                isLoading.value = true
                let result = register(userParams)
                result.then((response) => {
                    isLoading.value = false
                    if (response.data.code != 200) {
                        DialogBox.showDialog(response.data.msg)
                    } else {
                        DialogBox.showDialog(response.data.msg, 'success')
                        router.push('login')
                    }
                }).catch((error) => {
                    isLoading.value = false
                })
            }

            return {
                check,
                userParams,
                checkEmpty,
                doRegister,
                isLoading,
                DialogBox
            }
        }
    }

    let check = reactive({
        nameEmpty: false,
        pwdEmpty: false,
        telEmpty: false,
        realEmpty: false
    })

    let userParams = reactive({
        username: '',
        password: '',
        phone: '',
        realname: ''
    })

    function checkEmpty(param, empty) {
        if (userParams[param].length == 0 || userParams[param] == null) {
            check[empty] = true
        } else {
            check[empty] = false
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/login.scss';

    form input[type=submit] {
        margin-top: 1rem;
    }
</style>