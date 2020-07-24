import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameView from '../views/GameView'
import GameHistoryView from '../views/GameHistoryView'
import HomeView from '../views/HomeView'
import NewCourseView from '../views/NewCourseView'
import NewGameView from '../views/NewGameView'
import NewPlayerView from '../views/NewPlayerView'

import {
  gameHistoryPath,
  gamePath,
  homePath,
  newCoursePath,
  newGamePath,
  newPlayerPath
} from '../constants'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={`${gamePath}/:id`} component={GameView} />
    <Route exact path={gameHistoryPath} component={GameHistoryView} />
    <Route exact path={newCoursePath} component={NewCourseView} />
    <Route exact path={newGamePath} component={NewGameView} />
    <Route exact path={newPlayerPath} component={NewPlayerView} />
    <Route exact path={homePath} component={HomeView} />
  </Switch>
)

export default Routes