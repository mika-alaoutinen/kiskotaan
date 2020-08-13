import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import courseReducer from './courses/courseReducer'
import gameReducer from './game/gameReducer'
import newScoreCardReducer from './newScoreCard/newScoreCardReducer'
import playerReducer from './players/playerReducer'
import scoreCardReducer from './scoreCard/scoreCardReducer'

export const reducer = combineReducers({
  courses: courseReducer,
  players: playerReducer,
  newScoreCard: newScoreCardReducer,
  game: gameReducer,
  scoreCard: scoreCardReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store