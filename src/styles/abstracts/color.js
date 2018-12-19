const BACKGROUND = 'linear-gradient(to bottom, #00ae76, #aaeecc 100%) fixed'
const BACKGROUND_SECONDARY = 'rgba(30,210,255,.50)'
const BACKGROUND_SECONDARY_SHADOW = 'rgb(0,180,225)'
const TEXT_PRIMARY = 'mintcream'
const TEXT_SHADOW = 'dodgerblue'

class Color {
  static get BACKGROUND() {
    return BACKGROUND
  }

  static get BACKGROUND_SECONDARY() {
    return BACKGROUND_SECONDARY
  }

  static get BACKGROUND_SECONDARY_SHADOW() {
    return BACKGROUND_SECONDARY_SHADOW
  }

  static get TEXT_PRIMARY() {
    return TEXT_PRIMARY
  }

  static get TEXT_SHADOW() {
    return TEXT_SHADOW
  }
}

module.exports = Color
