import {
  ADD_PLAYER, DELETE_PLAYER, GET_PLAYERS, PlayerActionTypes, PlayerState }
  from './playerTypes'

const initialState: PlayerState = {
  players: []
}

// The reducer
const playerReducer = (state = initialState, action: PlayerActionTypes): PlayerState => {
  switch (action.type) {

    case ADD_PLAYER:
      return {
        players: [ ...state.players, action.player ]
      }

    case DELETE_PLAYER:
      return {
        players: state.players.filter(player => player.id !== action.id)
      }

    case GET_PLAYERS:
      return {
        players: action.players
      }

    default:
      return state
  }
}

export default playerReducer