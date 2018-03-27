const ucfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1)

module.exports = class Device {
  constructor (state = {}) {
    this.state = state
  }

  static possibleState () {
    return []
  }
}
