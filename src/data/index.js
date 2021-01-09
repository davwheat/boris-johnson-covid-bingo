// If changing primary, update color in CookieHub too!
const Colors = Object.freeze({
  toryPrimary: '#0087dc',
  dark: '#203647',
  offWhite: '#fff',
  error: '#8f1a11',
})

const Breakpoints = Object.freeze({
  upTo: {
    large: '(max-width: 767px)',
    medium: '(max-width: 579px)',
    playingFieldScrollBarShown: '(max-width: 985px)',
  },
  downTo: {
    medium: '(min-width: 768px)',
    small: '(min-width: 580px)',
    playingFieldScrollBarShown: '(min-width: 986px)',
  },
})

export { Colors, Breakpoints }
