import {
  ADD_PLAYER_TO_CARD, REMOVE_PLAYER_FROM_CARD, SELECT_COURSE, ScoreCardAction, ScoreCardState }
from './scoreCardTypes'

import { Player } from '../../types'

const initialState: ScoreCardState = {
  id: '',
  date: new Date(),
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
  rows: []
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
      
    default:
      return state
  }
}

const addPlayerToCard = (state: ScoreCardState, player: Player): ScoreCardState => ({
  ...state,
  players: state.players.concat(player)
})

export default scoreCardReducer