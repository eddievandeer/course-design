<template>
    <div class="calendar-wrapper">
        <div class="calendar-close" @click="close(1)"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="content" v-for="(item,index) in pickerTime" :key="index">
            <p class="year-and-moth">{{item.year}}年{{item.month}}月</p>
            <div class="week-header">
                <span v-for="item in weeks" :key=item>{{ item }}</span>
            </div>
            <div class="day-wrapper">
                <div class="day-item" v-for="time in item.days" :key="time"
                    @click="setUserSelects(item.year,item.month,time)">
                    <span
                        :class="{disable: time < now && index<1,today: time == now && index<1, current: ifCurrent(item.month,time)}"
                        v-if="time > 0">
                        {{time}}
                    </span>
                </div>
            </div>
            <app-dialog :show="DialogBox.show" :type="DialogBox.type">{{DialogBox.msg}}</app-dialog>
        </div>
        <div class="calendar-controller">
            <input type="button" class="reset" @click="reset" value="重置" />
            <input type="button" class="commit" @click="close" value="确认" />
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        toRefs
    } from 'vue'

    import {
        useRoute
    } from 'vue-router'

    import {
        datePicker,
        DialogBox
    } from '../../utils'
    import {
        check
    } from '../../services'

    export default {
        name: 'DatePicker',
        props: {
            selects: Object,
            show: Boolean
        },
        setup(props, context) {
            const route = useRoute()
            let returnTime = reactive({
                checkin_time: {
                    month: 0,
                    day: 0
                },
                checkout_time: {
                    month: 0,
                    day: 0
                }
            })

            const setUserSelects = (year, month, day) => {
                if (day == 0) return
                if (day < now && month % 12 <= datePicker.month % 12 && year <= datePicker.year) {
                    DialogBox.showDialog('只能选择今天及以后的日期')
                    return
                }
                if (returnTime.checkin_time.day == 0) {
                    returnTime.checkin_time.day = day
                    returnTime.checkin_time.month = month
                    selects.checkin_time = year + '/' + month + '/' + day
                    context.emit('update', selects)
                } else {
                    selects.days = day - returnTime.checkin_time.day
                    if (selects.days < 0) {
                        if (month % 12 > datePicker.month % 12) {
                            selects.days += new Date(datePicker.year, datePicker.month + 1, 0).getDate()
                        }
                        if (selects.days < 0) {
                            DialogBox.showDialog('退房日期不可早于入住日期')
                            return
                        }
                    }
                    if (selects.days == 0) {
                        DialogBox.showDialog('入住日期和退房日期不可为同一天')
                    } else {
                        returnTime.checkout_time.day = day
                        returnTime.checkout_time.month = month
                        selects.checkout_time = year + '/' + month + '/' + day
                        context.emit('update', selects)
                    }
                }
            }

            const ifCurrent = (month, day) => datePicker.ifCurrent(returnTime, month, day)

            const reset = () => {
                selects.days = 0
                returnTime.checkin_time.day = 0
                returnTime.checkin_time.month = 0
                selects.checkin_time = ''
                returnTime.checkout_time.day = 0
                returnTime.checkout_time.month = 0
                selects.checkout_time = ''
                context.emit('update', selects)
            }

            const close = (type) => {
                if (type && type > 0) {
                    context.emit('determine', false)
                    return
                }
                if (selects.checkin_time.length == 0 || selects.checkin_time == '') {
                    DialogBox.showDialog('请先选择入住日期')
                } else if (selects.checkout_time.length == 0 || selects.checkout_time == '') {
                    DialogBox.showDialog('请先选择退房日期')
                } else {
                    let result
                    check(selects, parseInt(route.params.rid)).then((result) => {
                        if (result) {
                            context.emit('determine', false)
                        } else {
                            reset()
                            DialogBox.showDialog('该房间在此时间段已被预订')
                        }
                    })
                }
            }

            return {
                ...toRefs(returnTime),
                weeks,
                pickerTime,
                now,
                setUserSelects,
                ifCurrent,
                reset,
                close,
                DialogBox
            }
        }
    }

    let weeks = ['日', '一', '二', '三', '四', '五', '六']
    let now = new Date(new Date().toLocaleDateString()).getDate()
    let pickerTime = datePicker.getDate()

    let selects = {
        days: 0,
        checkin_time: '',
        checkout_time: ''
    }
</script>

<style lang="scss" scoped>
    .calendar-wrapper {
        z-index: 10;
        width: 110%;
        height: 36rem;
        color: #606266;
        border: 1px solid #e4e7ed;
        margin-top: 0.5rem;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        background: #fff;
        border-radius: 5px;
        line-height: 30px;
        position: relative;
        display: grid;
        grid-template-rows: 45% 45% 10%;

        .calendar-close {
            color: #a2a2aa;
            font-size: 18px;
            cursor: pointer;
            position: absolute;
            top: 0rem;
            right: 0.6rem;
        }

        .content {
            width: auto;
            height: auto;
            padding: 0 0.5rem 1rem 0.5rem;
            border-top: 1px solid #f3f3f4;

            .year-and-moth {
                margin-bottom: 0.2rem;
                display: flex;
                justify-content: center;
            }

            .week-header {
                color: #606266;
                font-weight: 400;
                border-bottom: 1px solid #ebeef5;
                width: 100%;
                display: grid;
                grid-template-columns: repeat(7, auto);

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .day-wrapper {
                display: grid;
                grid-template-columns: repeat(7, auto);

                .day-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    span {
                        width: 2rem;
                        height: 2rem;
                        cursor: pointer;
                        text-align: center;

                        &:hover {
                            color: #409eff;
                        }

                        &.today {
                            color: #409eff;
                            font-weight: bold;
                        }

                        &.current {
                            color: #fff;
                            background-color: #409eff;
                            border-radius: 50%;
                        }

                        &.disable {
                            color: #c0c4cc;
                            cursor: not-allowed;
                        }
                    }
                }
            }
        }

        .calendar-controller {
            width: 100%;
            padding: 0 1.5rem;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            input[type="button"] {
                padding: 8px 20px;
                font-size: 14px;
                border-radius: 4px;
                box-sizing: border-box;
                transition: .1s;
            }

            .reset {
                color: #606266;
                margin-right: 1rem;
                background: #fff;
                border: 1px solid #dcdfe6;

                &:hover {
                    color: #409eff;
                    border-color: #c6e2ff;
                    background-color: #ecf5ff;
                }

                &:active {
                    color: #3a8ee6;
                    border-color: #3a8ee6;
                }
            }

            .commit {
                color: #fff;
                background: #409eff;
                border: 1px solid #409eff;

                &:hover {
                    background: #66b1ff;
                    border-color: #66b1ff;
                }

                &:active {
                    background: #3a8ee6;
                    border-color: #3a8ee6;
                }
            }
        }
    }
</style>