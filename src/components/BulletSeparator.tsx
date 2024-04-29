import React from 'react'
import { Colors } from '../data'
import clsx from 'clsx'

interface IProps {
  color?: 'light'
}

export default function BulletSeparator({ color }: IProps) {
  return (
    <span
      css={[
        {
          display: 'inline-block',
          verticalAlign: 'middle',
          transformOrigin: '50% 50%',
          transform: 'scale(1.75)',
          marginLeft: 8,
          marginRight: 8,
          color: Colors.dark,
        },
        color === 'light' && { color: Colors.offWhite },
      ]}
    >
      •
    </span>
  )
}
