module.exports = class Protocol {
    constructor () {
        this.currentState = state
        this.configuration = configuration
    }

    static supportedDevices () {
        return []
    }

    static requiredConfiguration () {
        return []
    }

    begin () {
        // ...
    }

    end () {
        // ...
    }

    update () {
        // ...
    }

    action () {
        // ...
    }
}
