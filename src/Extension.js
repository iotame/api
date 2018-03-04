module.exports = class Extension {
    constructor (dispatch) {
        this.dispatch = dispatch
    }

    devices () {
        return {}
    }

    channels () {
        return {}
    }

    protocols () {
        return {}
    }

    hooks () {
        return []
    }
}
