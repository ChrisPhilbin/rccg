import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Generator from './components/generator/Generator'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/generate" component={Generator} />
      </Switch>
    </Router>
  )
}

export default App