import React from 'react'

import ErrorBoundary from './ErrorBoundary'

import '../css/baseline.less'
import Footer from './Footer'
import { SnackbarProvider } from 'notistack'

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <ErrorBoundary>
      <SnackbarProvider preventDuplicate>
        <main>{children}</main>
        <Footer />
      </SnackbarProvider>
    </ErrorBoundary>
  )
}
