import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html lang="en-GB" {...props.htmlAttributes}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Do you find Boris Johnson's Coronavirus briefings ridiculously dull? Play a game of BoJo Bingo: mark off each phrase and action as they happen in real time."
        />
        <meta name="image" content="https://borisbingo.com/promo.jpg" />
        {/* <!-- Schema.org for Google --> */}
        <meta itemprop="name" content="BoJo Briefing Bingo" />
        <meta
          itemprop="description"
          content="Do you find Boris Johnson's Coronavirus briefings ridiculously dull? Play a game of BoJo Bingo: mark off each phrase and action as they happen in real time."
        />
        <meta itemprop="image" content="https://borisbingo.com/promo.jpg" />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="BoJo Briefing Bingo" />
        <meta
          name="twitter:description"
          content="Do you find Boris Johnson's Coronavirus briefings ridiculously dull? Play a game of BoJo Bingo: mark off each phrase and action as they happen in real time."
        />
        <meta name="twitter:site" content="@davwheat_" />
        <meta name="twitter:creator" content="@davwheat_" />
        <meta name="twitter:image:src" content="https://borisbingo.com/promo.jpg" />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="BoJo Briefing Bingo" />
        <meta
          name="og:description"
          content="Do you find Boris Johnson's Coronavirus briefings ridiculously dull? Play a game of BoJo Bingo: mark off each phrase and action as they happen in real time."
        />
        <meta name="og:image" content="https://borisbingo.com/site-ss.png" />
        <meta name="og:url" content="https://borisbingo.com/" />
        <meta name="og:locale" content="en_GB" />
        <meta name="og:type" content="website" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
