/**
 * Converts a provided list of game board buttons into a string
 * to append to a URL to get that specific game board back.
 *
 * @param {string[]} gameBoard Array of game board button text
 * 
 * @returns {string}
 * @example "?items=cGVuaXM="
 */
export default function EncodeGameBoard(gameBoard) {
  let encodedBoard = []

  // base64 encode each item text
  gameBoard.forEach(item => encodedBoard.push(btoa(item)))

  const commaDelimitedEncodedBoard = encodedBoard.join(',')
  const encodedCommandDelimitedEncodedBoard = btoa(commaDelimitedEncodedBoard)
  const urlSuffix = `?items=${encodedCommandDelimitedEncodedBoard}`

  return urlSuffix
}
