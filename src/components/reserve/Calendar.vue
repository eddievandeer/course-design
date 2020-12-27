<template>
    <div class="calendar-content">
        <div class="calendar-controller">
            <p class="calendar-title">请选择时间：</p>
            <div class="controller-btns">
                <div class="open-calendar">
                    <div class="timeLable">入住日期：</div>
                    <div class="time">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <input type="text" readonly="readonly" v-model="time.checkin_time" @focus="show=true"
                            placeholder="点击选择日期">
                    </div>
                </div>
                <div class="open-calendar">
                    <div class="timeLable">离开日期：</div>
                    <div class="time">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <input type="text" readonly="readonly" v-model="time.checkout_time" @focus="show=true"
                            placeholder="点击选择日期">
                    </div>
                </div>
            </div>
        </div>
        <date-picker v-if="show" :selects="time" :show="show" @update="update" @determine="determine">
        </date-picker>
    </div>
</template>

<script>
    import {
        reactive,
        ref,
        watch
    } from 'vue'
    import DatePicker from '../common/DatePicker'

    export default {
        name: 'Calendar',
        components: {
            DatePicker
        },
        props: {
            params: Object
        },
        emits: ['update', 'determine', 'getTime'],
        setup(props, context) {
            let show = ref(false)
            let time = reactive({
                days: 0,
                checkin_time: '',
                checkout_time: ''
            })

            const update = (newValue) => {
                time.days = newValue.days
                time.checkin_time = newValue.checkin_time
                time.checkout_time = newValue.checkout_time
                context.emit('getTime', time)
            }

            const determine = (newValue) => {
                show.value = newValue
            }

            return {
                time,
                show,
                update,
                determine
            }
        }
    }
</script>

<style lang="scss" scoped>
    .calendar-content {
        width: 85%;
        margin-top: 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .calendar-controller {
            width: 100%;
            color: #636363;

            .controller-btns {
                display: grid;
                grid-template-columns: 50% 50%;

                .open-calendar {
                    color: #636363;
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .time {
                        position: relative;

                        i {
                            color: #aeb1b8;
                            position: absolute;
                            top: 0.7rem;
                            left: 0.1rem;
                        }

                        input {
                            height: 2rem;
                            color: #606266;
                            padding-left: 1.3rem;
                            border: none;
                            border-bottom: 1px solid #CDCDCD;
                            cursor: pointer;

                            &:focus {
                                border: none;
                                outline: none;
                                border-bottom: 1px solid #3DB3FC;
                            }

                            &::placeholder {
                                color: #C0C4D6;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>