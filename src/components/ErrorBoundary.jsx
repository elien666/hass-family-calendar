import React from 'react'
import styled from 'styled-components'
import logger from '../utils/logger'

const ErrorDiv = styled.div`
  padding: ${props => props.$compact ? '0.75rem' : '2rem'};
  text-align: center;
  color: #ffffff;
  background-color: #2f2f2f;
  border-radius: 4px;
  margin: ${props => props.$compact ? '0' : '2rem'};

  h2 {
    color: #f85a5a;
    margin-bottom: ${props => props.$compact ? '0.5rem' : '1rem'};
    font-size: ${props => props.$compact ? '1rem' : undefined};
  }

  button {
    margin-top: ${props => props.$compact ? '0.5rem' : '1rem'};
    padding: ${props => props.$compact ? '0.3rem 0.6rem' : '0.5rem 1rem'};
    background-color: #356957;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${props => props.$compact ? '0.85rem' : '1rem'};

    &:hover {
      background-color: #2d5547;
    }
  }
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Log error to console and backend
    const errorMessage = error?.toString() || 'Unknown error'
    const errorStack = error?.stack || ''
    const componentStack = errorInfo?.componentStack || ''
    
    logger.error(
      `ErrorBoundary caught an error: ${errorMessage}`,
      {
        errorName: error?.name,
        errorMessage: errorMessage,
        errorStack: errorStack,
        componentStack: componentStack
      }
    )
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      const compact = this.props.compact
      return (
        <ErrorDiv $compact={compact}>
          <h2>{compact ? 'Fehler' : 'Something went wrong'}</h2>
          {!compact && <p>The application encountered an error. Please try reloading the page.</p>}
          {import.meta.env.DEV && this.state.error && (
            <details style={{ marginTop: '1rem', textAlign: 'left' }}>
              <summary>Error details (development only)</summary>
              <pre style={{ 
                background: '#1c1c1c', 
                padding: '1rem', 
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.9rem'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <div>
            <button onClick={this.handleReset}>Try Again</button>
            <button onClick={this.handleReload} style={{ marginLeft: '0.5rem' }}>Reload Page</button>
          </div>
        </ErrorDiv>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

