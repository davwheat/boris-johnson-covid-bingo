/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import 'normalize.css'

import React from 'react'

export function wrapRootElement({ element }) {
  return <React.StrictMode>{element}</React.StrictMode>
}
