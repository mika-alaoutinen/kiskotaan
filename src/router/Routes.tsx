import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameHistory from '../views/GameHistory'
import HomePage from '../views/Home'
import NewGame from '../views/NewGame'
import { gameHistoryPath, homePath, newGamePath } from '../constants'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={gameHistoryPath} component={GameHistory} />
    <Route exact path={newGamePath} component={NewGame} />
    <Route exact path={homePath} component={HomePage} />
  </Switch>
)

export default Routes