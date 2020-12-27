import {
    reactive
} from 'vue'
import DatePicker from './date'
import InstallDialog from './dialog'

let DialogBox = reactive(new InstallDialog())
let datePicker = new DatePicker()
datePicker.init()

export {
    DialogBox,
    datePicker
}