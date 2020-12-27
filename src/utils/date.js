class DatePicker {
    constructor() {
        this.year = null
        this.month = null
        this.day = null
        this.beginDay = null
        this.nowDate = null
    }

    init() {
        this.nowDate = new Date(new Date().toLocaleDateString())
        this.nowDate = new Date(this.nowDate.getFullYear(), this.nowDate.getMonth(), 1)
        this.year = this.nowDate.getFullYear()
        this.month = this.nowDate.getMonth() + 1
        this.day = this.nowDate.getDate()
    }

    setDate(item) {
        let day = 1
        let date = this.nowDate
        for (let i = 0; i < 42; i++) {
            if (i >= date.getDay() && day <= this.mGetDate(date.getFullYear(), date.getMonth())) {
                item.push(day)
                day++
            }
            else {
                item.push(0)
            }
        }
        this.nowDate = new Date(this.nowDate.getFullYear(), this.nowDate.getMonth() + 1, 1)
    }

    getDate() {
        let allDays = new Array()

        for (let index = 0; index < 2; index++) {
            let item = {
                year: this.nowDate.getFullYear(),
                month: this.nowDate.getMonth() + 1,
                days: []
            }
            this.setDate(item.days)
            allDays.push(item)
        }

        this.init()

        return allDays
    }

    ifCurrent(time, month, day) {
        return day == time.checkin_time.day &&
            month == time.checkin_time.month ||
            day == time.checkout_time.day &&
            month == time.checkout_time.month
    }

    mGetDate(year, month) {
        let d = new Date(year, month + 1, 0)
        return d.getDate()
    }
}

export default DatePicker