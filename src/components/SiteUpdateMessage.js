/* eslint-disable react/display-name */
// Add this component to your AppContainer (where your app shell is)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withSnackbar } from 'notistack'
import { Button } from '@material-ui/core'

// Check for updates every 15 minutes
const UPDATE_CHECKING_INTERVAL = 5 * 60 * 1000

class SiteUpdateMessage extends Component {
  state = {
    showButton: false,
    updateHandler: null,
  }

  componentDidMount() {
    this.registerServiceWorker()
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  registerServiceWorker = () => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined' || !navigator.serviceWorker) {
      return
    }

    navigator.serviceWorker.register('/sw.js').then(reg => {
      if (!navigator.serviceWorker.controller) {
        return
      }

      // Check for SW update every X ms
      this.updateInterval = setInterval(() => {
        reg.update()
      }, UPDATE_CHECKING_INTERVAL)

      if (reg.waiting) {
        this.updateReady(reg.waiting)
      } else if (reg.installing) {
        this.trackInstalling(reg.installing)
      } else {
        reg.addEventListener('updatefound', () => {
          this.trackInstalling(reg.installing)
        })
      }
    })

    // Listen for the controlling service worker changing
    // and reload the page
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  }

  trackInstalling = worker => {
    worker.addEventListener('statechange', () => {
      if (worker.state === 'installed') {
        this.updateReady(worker)
      }
    })
  }

  updateReady = worker => {
    this.setState({
      showButton: true,
      updateHandler: () => {
        this.setState({ showButton: false })
        // Tell the service worker to skipWaiting
        worker.postMessage({ action: 'skipWaiting' })
      },
    })
  }

  handleUpdate = () => {
    if (typeof this.state.updateHandler === 'function') {
      this.state.updateHandler()
    }
  }

  render() {
    if (!this.state.showButton) return null

    this.props.enqueueSnackbar('An update to this site is available', {
      action: () => (
        <Button aria-label="Refresh" onClick={this.handleUpdate} color="inherit">
          Refresh
        </Button>
      ),
      persist: true,
      variant: 'info',
    })

    return null
  }
}

SiteUpdateMessage.propTypes = {
  enqueueSnackbar: PropTypes.func,
}

export default withSnackbar(SiteUpdateMessage)
