import React from 'react'

import { useMediaQuery } from '@material-ui/styles'
import { Breakpoints } from '../data'
import AlertBanner from './AlertBanner'

export default function PortraitWarning() {
  const isPortraitOrSmall = useMediaQuery(Breakpoints.upTo.medium)

  if (isPortraitOrSmall) {
    return <AlertBanner title="Warning" message="Play BoJo Bingo in landscape or on a larger device for the best experience." />
  } else {
    return null
  }
}
