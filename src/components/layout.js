import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from './ErrorBoundary'

import '@fontsource/jost/400.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

import '../css/baseline.less'
import Footer from './footer'
import SiteUpdateMessage from './SiteUpdateMessage'
import { SnackbarProvider } from 'notistack'
import { NoSsr } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <SnackbarProvider preventDuplicate>
        <main>{children}</main>
        <Footer />

        {/* Displays update message when pages cached with gatsby-plugin-offline */}
        <NoSsr>
          <SiteUpdateMessage />
        </NoSsr>
      </SnackbarProvider>
    </ErrorBoundary>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
