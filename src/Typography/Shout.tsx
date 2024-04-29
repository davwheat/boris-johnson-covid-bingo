import React from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export default function Shout({ children, className, noPadding }: IProps) {
  return (
    <h1
      css={[
        {
          fontWeight: 600,
          fontSize: 48,
          paddingBottom: 24,
          letterSpacing: 0.3,

          '@media (max-width: 767px)': {
            fontSize: 36,
          },

          '@media (max-width: 599px)': {
            fontSize: 28,
          },
        },
        noPadding && { paddingBottom: 0 },
      ]}
      className={className}
    >
      {children}
    </h1>
  )
}
