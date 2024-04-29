import React from 'react'

import { Paragraph, Shout } from '../Typography'
import Link from './Link'

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    if (process.env.NODE_ENV !== 'development') return { hasError: true }
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, errorInfo)
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main
          css={{
            padding: 32,
            maxWidth: 900,
            margin: 'auto',
          }}
        >
          <Shout>Uh oh, something went wrong.</Shout>
          <Paragraph bold>It's not you, it's us.</Paragraph>
          <Paragraph>
            Please try <Link onClick={() => window.location.reload()}>refreshing the page</Link>.
          </Paragraph>
          <Paragraph>
            Still having issues? Let me know <Link url="https://twitter.com/davwheat_">on Twitter</Link>.
          </Paragraph>
        </main>
      )
    }

    return this.props.children
  }
}
