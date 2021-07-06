import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from './components/error-boundary.component'
import NotFound from './components/not-found.component'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 p-10 min-h-full">
      <ErrorBoundary>
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
