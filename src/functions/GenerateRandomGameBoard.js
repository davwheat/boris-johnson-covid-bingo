import AllData from '../data/bingoItems'

/**
 * Generates a random set of 25 items for the playing field
 *
 * @param {number} [customCount=25] Custom number of values to generate
 *
 * @returns {string[]}
 */
export default function GenerateRandomGameBoard(customCount) {
  let board = []

  for (let i = 0; i < (customCount || 25); i++) {
    let dataIndex = 0

    function chooseRandomIndex() {
      dataIndex = Math.floor(Math.random() * AllData.length)
    }

    chooseRandomIndex()

    while (board.includes(AllData[dataIndex])) {
      chooseRandomIndex()
    }

    board.push(AllData[dataIndex])
  }

  return board
}
