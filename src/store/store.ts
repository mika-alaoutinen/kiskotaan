import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import courseReducer from './courses/courseReducer'
import playerReducer from './players/playerReducer'
import newScoreCardReducer from './scoreCard/newScoreCardReducer'
import scoreCardReducer from './scoreCard/scoreCardReducer'

export const reducer = combineReducers({
  courses: courseReducer,
  players: playerReducer,
  newScoreCard: newScoreCardReducer,
  scoreCard: scoreCardReducer,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store