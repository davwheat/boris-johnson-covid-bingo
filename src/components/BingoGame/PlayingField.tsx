import React, { useReducer, useState } from 'react'

import BingoButton from './BingoButton'
import ScrollToViewMore from '../ScrollToViewMore'

import GenerateRandomGameBoard from '../../functions/GenerateRandomGameBoard'
import DecodeCustomItems from '../../functions/DecodeCustomItems'
import EncodeGameBoard from '../../functions/EncodeGameBoard'
import Button from '../Button'
import { Colors } from '../../data'
import generateTransitions from '../../functions/generateTransitions'
import { FreeSpaceText } from '../../data/bingoItems'
import copyToClipboard from 'copy-to-clipboard'

function GetGameBoard(): string[] {
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

export default function PlayingField() {
  const defaultGameState = GetGameBoard().map(text => ({ text, checked: false }))

  const [gameState, setGameState] = useState<
    {
      text: string
      checked: boolean
    }[]
  >(defaultGameState)

  const forceUpdate = useReducer(x => x + 1, 0)[1]

  function ToggleButtonState(index: number) {
    console.log('ToggleButtonState', index)

    setGameState(s => {
      let state = [...s].map(x => ({ ...x }))

      if (state[index].text === FreeSpaceText) {
        return state
      }

      state[index].checked = !state[index].checked
      return state
    })
    forceUpdate()
  }

  return (
    <>
      <div
        css={{
          marginBottom: 24,
        }}
      >
        <Button
          css={{
            position: 'relative',
            margin: 'auto',
            marginBottom: 16,
          }}
          onClick={(e: MouseEvent) => {
            let x: string[] = []
            gameState.forEach(item => x.push(item.text))

            // Copy URL to clipboard
            copyToClipboard(window.location.origin + window.location.pathname + EncodeGameBoard(x))

            // Show 'Copied' text for 1.5s
            let span = e.currentTarget!!.lastChild
            span.setAttribute('data-shown', '')
            setTimeout(() => span.removeAttribute('data-shown'), 1500)
          }}
        >
          Copy permalink to this bingo board
          <span
            css={{
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
            }}
          >
            Copied!
          </span>
        </Button>

        <ScrollToViewMore />
      </div>

      <div
        css={{
          overflowX: 'auto',
          maxWidth: '100%',
        }}
      >
        <section
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: 2,
            background: '#000',
            padding: 2,
            '& > *': {
              background: '#fff',
            },
            minWidth: 875,
            minHeight: 600,
          }}
        >
          {gameState.map((boardItem, i) => {
            console.log('boardItem', boardItem)

            return (
              <BingoButton
                description={boardItem.text}
                isCrossedOut={boardItem.checked}
                key={`${i}__${boardItem.text}__${boardItem.checked}`}
                onClick={() => ToggleButtonState(i)}
              />
            )
          })}
        </section>
      </div>
    </>
  )
}
