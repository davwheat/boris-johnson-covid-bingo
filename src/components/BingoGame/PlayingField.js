import React, { useReducer } from 'react'
import { makeStyles } from '@material-ui/styles'
import BingoButton from './BingoButton'

import copyToClipboard from 'copy-to-clipboard'
import useStateWithCallback from '../../functions/useStateWithCallback'
import GenerateRandomGameBoard from '../../functions/GenerateRandomGameBoard'
import DecodeCustomItems from '../../functions/DecodeCustomItems'
import EncodeGameBoard from '../../functions/EncodeGameBoard'
import Button from '../button'
import { Colors } from '../../data'
import generateTransitions from '../../functions/generateTransitions'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gap: 2,
    background: '#000',
    padding: 2,
    '& > *': {
      background: '#fff',
    },
  },
  copyButton: {
    position: 'relative',
    margin: 'auto',
    marginBottom: 48,
    marginTop: -24,
  },
  copyButtonCopiedText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: Colors.dark,
    borderTopLeftRadius: '24px 50%',
    borderBottomLeftRadius: '24px 50%',
    borderTopRightRadius: '24px 50%',
    borderBottomRightRadius: '24px 50%',
    opacity: 0,
    ...generateTransitions('opacity'),
    '&[data-shown]': {
      opacity: 1,
    },
  },
})

function GetGameBoard() {
  if (typeof window === 'undefined') return GenerateRandomGameBoard()

  const params = new URLSearchParams(window.location.search)
  const items = params.get('items')

  if (!items) return GenerateRandomGameBoard()

  try {
    // Decode the custom items in URL
    return DecodeCustomItems(items)
  } catch {
    // If this fails, remove the invalid data from the param
    params.delete('items')
    let search = params.toString()
    window.location.search = search ? '?' + search : ''
    //Then just generate a random board
    return GenerateRandomGameBoard()
  }
}

export default React.memo(function PlayingField() {
  const defaultGameState = GetGameBoard().map(text => ({ text, checked: false }))

  /**
   * @type {[{text: string, checked: bool}[], function]}
   */
  const [gameState, setGameState] = useStateWithCallback(defaultGameState)

  const forceUpdate = useReducer(x => x + 1, 0)[1]

  const classes = useStyles()

  // if (!gameBoard) {
  //   return <Paragraph>An error occurred. Please try refreshing the page.</Paragraph>
  // }

  function ToggleButtonState(index) {
    let state = gameState
    state[index].checked = !state[index].checked
    setGameState(state, s => {
      console.log(s)
    })
    forceUpdate()
  }

  return (
    <>
      <Button
        className={classes.copyButton}
        onClick={e => {
          let x = []
          gameState.forEach(item => x.push(item.text))

          // Copy URL to clipboard
          copyToClipboard(window.location.origin + window.location.pathname + EncodeGameBoard(x))

          // Show 'Copied' text for 1.5s
          let span = e.currentTarget.lastChild
          span.setAttribute('data-shown', '')
          setTimeout(() => span.removeAttribute('data-shown'), 1500)
        }}
      >
        Copy permalink to this bingo board
        <span className={classes.copyButtonCopiedText}>Copied!</span>
      </Button>

      <section className={classes.root}>
        {gameState.map((boardItem, i) => (
          <BingoButton
            description={boardItem.text}
            isCrossedOut={boardItem.checked}
            key={`${boardItem.text}__${boardItem.checked}`}
            onClick={() => ToggleButtonState(i)}
          />
        ))}
      </section>
    </>
  )
})
