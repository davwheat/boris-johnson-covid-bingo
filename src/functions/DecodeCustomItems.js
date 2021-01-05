import GenerateRandomGameBoard from './GenerateRandomGameBoard'

/**
 * Converts a GET query of custom board items into an array of strings.
 *
 * @param {string} data Custom board items param from URL
 */
export default function DecodeCustomItems(data) {
  // Our input is base64 encoded to make it URL safe
  const initialDecode = atob(data)

  // `initialDecode` contains a list of comma-delimited strings, so lets split them
  const b64items = initialDecode.split(',')

  let items = []

  b64items.forEach(item => {
    try {
      // If we have all the items we can fit, don't
      // add more!
      if (items.length >= 25) return

      // Decode individual custom item
      const decoded = atob(item)

      // Discard long entries
      //? These will look bad and mess up on small devices
      if (decoded.length > 256) return

      // Add item to the array
      items.push(decoded)
    } catch {
      // If something goes wrong (i.e. invalid B64)
      // then just skip this item. It isn't worth
      // breaking this entire function.
    }
  })

  const remainingElements = 25 - items.length

  if (remainingElements > 0) {
    let extraItems = GenerateRandomGameBoard(remainingElements)
    items = [...items, ...extraItems]
  }

  return items
}
