import clsx from 'clsx'
import React from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
  inline?: boolean
  bold?: boolean
  center?: boolean
}

export default function Paragraph({ children, className, noPadding, inline, bold, center }: IProps) {
  const props = {
    css: [
      {
        paddingBottom: 12,
        lineHeight: 1.4,
      },
      noPadding && {
        paddingBottom: 0,
      },
      bold && {
        fontWeight: 600,
      },
      center && {
        textAlign: 'center',
      },
    ],
    className,
  }

  if (inline) {
    return <span {...props}>{children}</span>
  } else {
    return <p {...props}>{children}</p>
  }
}
