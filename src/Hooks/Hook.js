module.exports = class Hook {
  constructor () {
    if (new.target === Hook) {
      throw new TypeError('Cannot construct abstract Hook instances directly')
    }

    this.events = []
    this.callback = () => {}
  }

  method () {
    return () => { this.callback() }
  }

  on (event) {
    this.events.push(event)
    return this
  }

  andOn (event) {
    return this.on(event)
  }

  do (callback) {
    this.callback = callback
    return this
  }
}
