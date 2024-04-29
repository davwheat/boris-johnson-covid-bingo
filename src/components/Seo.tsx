import React from 'react'

import { HeadProvider, Title } from 'react-head'

interface IProps {
  title?: string
}

function Seo({ title = '' }: IProps) {
  const defaultTitle = 'BoJo Briefing Bingo'

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <HeadProvider>
      <Title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</Title>
    </HeadProvider>
  )
}

export default Seo
