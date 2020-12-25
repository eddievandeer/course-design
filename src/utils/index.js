import {
    reactive
} from 'vue'
import InstallDialog from './dialog'

let DialogBox = reactive(new InstallDialog())

export {
    DialogBox
}