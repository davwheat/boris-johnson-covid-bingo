/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Title } from 'react-head'

function SEO({ description, meta, title }) {
  // const metaDescription =
  //   description ||
  //   "Do you find Boris Johnson's Coronavirus briefings ridiculously dull? Play a game of BoJo Bingo: mark off each phrase and action as they happen in real time."
  const defaultTitle = 'BoJo Briefing Bingo'

  return (
    <>
      <Title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</Title>
    </>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
