import React from 'react'
import { Colors } from '../data'
import { Paragraph } from '../Typography'

interface IProps {
  title: string
  message: string
  noPadding?: boolean
  afterHeading?: boolean
  alternateColor?: boolean
  customTheme?: { background?: string; color?: string }
  innerClassName?: string
}

/**
 * A simple alert banner.
 */
export default function AlertBanner({ title, message, noPadding, afterHeading, alternateColor, customTheme, innerClassName }: IProps) {
  return (
    <section
      css={[
        {
          width: '100%',
          padding: '12px 16px',
          background: Colors.dark,
          color: Colors.offWhite,
          fontSize: 18,
        },
        !noPadding && { marginBottom: 16 },
        afterHeading && { marginTop: -6 },
        alternateColor && { background: Colors.primaryDark },
        customTheme && { background: customTheme.background, color: customTheme.color },
      ]}
    >
      <div className={innerClassName}>
        <Paragraph css={{ paddingBottom: 4 }} bold>
          {title}
        </Paragraph>
        <Paragraph noPadding>{message}</Paragraph>
      </div>
    </section>
  )
}
