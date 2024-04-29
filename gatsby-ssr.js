/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import 'normalize.css'

import React from 'react'

export function wrapRootElement({ element }) {
  return <React.StrictMode>{element}</React.StrictMode>
}
