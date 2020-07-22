import {
  ADD_PLAYER_TO_CARD, CREATE_SCORECARD, REMOVE_PLAYER_FROM_CARD, SELECT_COURSE,
  ScoreCardAction, ScoreCardState }
from './scoreCardTypes'

import { Player } from '../../types'

const initialState: ScoreCardState = {
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
}

const scoreCardReducer = (state: ScoreCardState = initialState, action: ScoreCardAction): ScoreCardState => {
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
    
    case CREATE_SCORECARD:
      return action.scorecard
      
    default:
      return state
  }
}

const addPlayerToCard = (state: ScoreCardState, player: Player): ScoreCardState => ({
  ...state,
  players: state.players.concat(player)
})

export default scoreCardReducer