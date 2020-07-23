import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Game from '../views/Game'
import GameHistory from '../views/GameHistory'
import GameLoading from '../components/newGame/GameLoading'
import HomePage from '../views/Home'
import NewCourse from '../views/NewCourse'
import NewGame from '../views/NewGame'
import NewPlayer from '../views/NewPlayer'

import {
  gameHistoryPath,
  gameLoading,
  gamePath,
  homePath,
  newCoursePath,
  newGamePath,
  newPlayerPath
} from '../constants'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={gameLoading} component={GameLoading} />
    <Route exact path={`${gamePath}/:id`} component={Game} />
    <Route exact path={gameHistoryPath} component={GameHistory} />
    <Route exact path={newCoursePath} component={NewCourse} />
    <Route exact path={newGamePath} component={NewGame} />
    <Route exact path={newPlayerPath} component={NewPlayer} />
    <Route exact path={homePath} component={HomePage} />
  </Switch>
)

export default Routes