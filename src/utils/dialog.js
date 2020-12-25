class InstallDialog {
    constructor() {
        this.show = false
        this.msg = ''
    }

    showDialog(message) {
        this.show = true
        this.msg = message
        setTimeout(() => {
            this.show = false
        }, 2000)
    }
}

export default InstallDialog