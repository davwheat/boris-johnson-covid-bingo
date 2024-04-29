import React from 'react'

interface IProps {
  children: React.ReactNode
  noSpacing?: boolean
  className?: string
  noMaxWidth?: boolean
  innerClassName?: string
}

export default function BodySection({ children, noSpacing, className, noMaxWidth, innerClassName, ...props }: IProps) {
  return (
    <section
      css={[
        {
          display: 'flex',
          padding: '0 32px',
          alignItems: 'center',
          flexDirection: 'column',
        },
        !noSpacing && {
          paddingTop: 32,
          paddingBottom: 32,
        },
      ]}
      className={className}
      {...props}
    >
      <div
        css={[
          {
            maxWidth: 900,
            width: '100%',
          },
          noMaxWidth && {
            maxWidth: 'none',
          },
        ]}
        className={innerClassName}
      >
        {children}
      </div>
    </section>
  )
}
