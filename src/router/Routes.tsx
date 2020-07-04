import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from '../components/home/HomePage'
import NewGame from '../components/newGame/NewGame'
import Navigation from '../router/Navigation'

const Routes: React.FC = () => (
  <Router>
    <Navigation />
    
    <Switch>
      <Route exact path='/new-game' component={NewGame} />
      <Route exact path='/' component={HomePage} />
    </Switch>
  </Router>
)
  
export default Routes