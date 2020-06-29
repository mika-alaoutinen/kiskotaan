import { ADD_PLAYER, DELETE_PLAYER, GET_PLAYERS, PlayerAction, PlayerState } from './playerTypes'

const playerReducer = (state: PlayerState = [], action: PlayerAction): PlayerState => {
  switch (action.type) {
    case ADD_PLAYER:
      return [ ...state, action.player ]
    case DELETE_PLAYER:
      return state.filter(player => player.id !== action.id)
    case GET_PLAYERS:
      return action.players
    default:
      return state
  }
}

export default playerReducer