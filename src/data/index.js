// If changing primary, update color in CookieHub too!
const Colors = Object.freeze({
  toryPrimary: '#0087dc',
  dark: '#203647',
  offWhite: '#fff',
})

const Breakpoints = Object.freeze({
  upTo: {
    large: '(max-width: 767px)',
    medium: '(max-width: 579px)',
  },
  downTo: {
    medium: '(min-width: 768px)',
    small: '(min-width: 580px)',
  },
})

export { Colors, Breakpoints }
