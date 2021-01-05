import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from './ErrorBoundary'

import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

import '../css/baseline.less'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <main>{children}</main>
      <Footer />
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
