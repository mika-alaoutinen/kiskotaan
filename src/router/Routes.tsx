import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameHistory from '../views/GameHistory'
import HomePage from '../views/Home'
import NewGame from '../views/NewGame'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/history' component={GameHistory} />
    <Route exact path='/new-game' component={NewGame} />
    <Route exact path='/' component={HomePage} />
  </Switch>
)

export default Routes