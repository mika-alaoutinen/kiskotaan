import {
  ADD_PLAYER_TO_CARD, REMOVE_PLAYER_FROM_CARD, RESET_NEW_CARD, SELECT_COURSE,
  NewScoreCardAction, NewScoreCardState }
from './newScoreCardTypes'

import { Player } from '../../types'

const initialState: NewScoreCardState = {
  course: {
    id: '',
    name: '',
    holes: []
  },
  players: [],
}

const newScoreCardReducer = (state: NewScoreCardState = initialState, action: NewScoreCardAction): NewScoreCardState => {
  switch (action.type) {
    
    case SELECT_COURSE:
      return {
        ...state,
        course: action.course
      }

    case ADD_PLAYER_TO_CARD:
      return state.players.includes(action.player)
        ? state
        : addPlayerToCard(state, action.player)
        
    case REMOVE_PLAYER_FROM_CARD:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.player.id)
      }
    
    case RESET_NEW_CARD:
      return initialState
      
    default:
      return state
  }
}

const addPlayerToCard = (state: NewScoreCardState, player: Player): NewScoreCardState => ({
  ...state,
  players: state.players.concat(player)
})

export default newScoreCardReducer