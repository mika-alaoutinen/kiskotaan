import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../components/home/HomePage'
import NewGame from '../components/newGame/NewGame'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/new-game' component={NewGame} />
    <Route exact path='/' component={HomePage} />
  </Switch>
)

export default Routes