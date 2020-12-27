class InstallDialog {
    constructor() {
        this.show = false
        this.msg = ''
        this.type = ''
    }

    showDialog(message, type = 'error') {
        this.type = type
        this.show = true
        this.msg = message
        setTimeout(() => {
            this.show = false
        }, 2000)
    }
}

export default InstallDialog