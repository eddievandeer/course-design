import AppDialog from './AppDialog.vue'
import Loading from './Loading.vue'

const COMPONENTS = [
    AppDialog,
    Loading
]

const Common = {}

Common.install = Vue => {
    COMPONENTS.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default Common