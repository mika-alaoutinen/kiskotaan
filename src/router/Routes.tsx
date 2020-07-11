import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameHistory from '../components/gameHistory/GameHistory'
import HomePage from '../components/home/HomePage'
import NewGame from '../components/newGame/NewGame'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/history' component={GameHistory} />
    <Route exact path='/new-game' component={NewGame} />
    <Route exact path='/' component={HomePage} />
  </Switch>
)

export default Routes