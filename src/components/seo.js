/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { HeadProvider, Title } from 'react-head'

function SEO({ title }) {
  // const metaDescription =
  //   description ||
  //   "Do you find Boris Johnson's Coronavirus briefings ridiculously dull? Play a game of BoJo Bingo: mark off each phrase and action as they happen in real time."
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

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string,
}

export default SEO
