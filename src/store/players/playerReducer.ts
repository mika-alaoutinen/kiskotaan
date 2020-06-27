import { GET_PLAYERS, PlayerActionTypes, PlayerState } from './playerTypes'

const initialState: PlayerState = {
  players: []
}

// The reducer
const playerReducer = (state = initialState, action: PlayerActionTypes): PlayerState => {
  switch (action.type) {
    case GET_PLAYERS:
      return { players: action.players }
    default:
      return state
  }
}

export default playerReducer