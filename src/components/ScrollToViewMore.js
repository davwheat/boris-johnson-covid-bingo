import React from 'react'

import Paragraph from '../typography/paragraph'
import { useMediaQuery } from '@material-ui/core'
import { Breakpoints } from '../data'

export default function ScrollToViewMore() {
  const isPortraitOrSmall = useMediaQuery(Breakpoints.upTo.playingFieldScrollBarShown)

  if (isPortraitOrSmall) {
    return (
      <Paragraph bold center>
        To view more of the grid, swipe or scroll horizontally.
      </Paragraph>
    )
  } else {
    return null
  }
}
