import log from 'loglevel'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    log.warn(error, errorInfo.componentStack)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? (
      <div>
        <div />
        <h2>It seems like the page didn&apos;t load properly. Please refresh the page</h2>
      </div>
    ) : (
      children
    )
  }
}

export default ErrorBoundary
