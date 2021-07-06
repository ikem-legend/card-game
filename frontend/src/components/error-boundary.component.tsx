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

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    log.warn(error, errorInfo.componentStack)
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="inline-block w-40 h-40 bg-cover bg-center bg-error-image" />
        <h2 className="text-center">
          It seems like the page didn&apos;t load properly. Please refresh the page
        </h2>
      </div>
    ) : (
      children
    )
  }
}

export default ErrorBoundary
