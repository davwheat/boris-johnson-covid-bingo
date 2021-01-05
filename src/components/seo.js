/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Meta, Title } from 'react-head'

function SEO({ description, meta, title }) {
  const metaDescription = description || "Constant COVID briefings getting on your nerve? Try a game of BoJo Briefing Bingo while you're watching!"
  const defaultTitle = 'BoJo Bingo'

  const defaultMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    // {
    //   name: `twitter:creator`,
    //   content: site.siteMetadata?.author || ``,
    // },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  let finalMeta = defaultMeta.concat(meta)

  return (
    <>
      <Title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</Title>

      {/* Add meta tags */}
      {finalMeta.map(mObj => (
        <Meta key={mObj.name + mObj.content} name={mObj.name} content={mObj.content} />
      ))}
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
