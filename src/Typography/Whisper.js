import React from 'react'

export default function Whisper({ children, className, noPadding }) {
  return (
    <p
      css={[
        {
          paddingBottom: 6,
          lineHeight: 1.2,
          fontSize: 16,
        },
        noPadding && {
          paddingBottom: 0,
        },
      ]}
      className={className}
    >
      {children}
    </p>
  )
}
