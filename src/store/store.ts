import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import playerReducer from './players/playerReducer'

const reducer = combineReducers({
  players: playerReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof reducer>
export default store