import React from 'react'
import { Colors } from '../../data'
import { FreeSpaceText } from '../../data/bingoItems'

interface IProps {
  isCrossedOut?: boolean
  description: string
  onClick: () => void
}

export default function BingoButton({ isCrossedOut, description, onClick }: IProps) {
  return (
    <button
      css={{
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
        lineHeight: 1.25,
        position: 'relative',
        cursor: 'pointer',
        '&:active, &:focus': {
          outline: '2px orange solid',
        },
        '&[aria-pressed=true]': {
          background: Colors.toryPrimary,
          color: '#fff',
        },
      }}
      aria-pressed={isCrossedOut || description === FreeSpaceText ? 'true' : 'false'}
      onClick={onClick}
    >
      {description}
    </button>
  )
}
