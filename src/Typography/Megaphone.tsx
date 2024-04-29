import React from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export default function Megaphone({ children, className, noPadding }: IProps) {
  return (
    <h1
      css={[
        {
          fontWeight: 700,
          fontSize: 76,
          paddingBottom: 16,
          letterSpacing: 1.5,

          '@media (max-width: 1280px)': {
            fontSize: 64,
            letterSpacing: 1.2,
          },

          '@media (max-width: 767px)': {
            fontSize: 54,
            letterSpacing: 0.8,
          },

          '@media (max-width: 599px)': {
            fontSize: 42,
            letterSpacing: 0.4,
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
