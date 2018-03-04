module.exports = class Hook {
  constructor () {
    if (new.target === Hook) {
      throw new TypeError('Cannot construct abstract Hook instances directly')
    }

    this.callback = () => {}
  }

  method () {
    return () => { this.callback() }
  }

  on (event) {
    this.event = event
    return this
  }

  do (callback) {
    this.callback = callback
    return this
  }
}
