import {
  CREATE_SCORECARD, DELETE_SCORECARD, GET_SCORECARD, ScoreCardAction, ScoreCardState
} from './scoreCardTypes'

import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES, ScoreAction } from '../scores/scoreTypes'
import scoreReducer from '../scores/scoreReducer'

export const initialState: ScoreCardState = {
  id: '',
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
}

const scoreCardReducer = (
  state: ScoreCardState = initialState, action: ScoreCardAction
): ScoreCardState => {

  switch (action.type) {

    case GET_SCORECARD:
      return action.scoreCard
    
    case CREATE_SCORECARD:
      return action.scoreCard
  
    case DELETE_SCORECARD:
      return initialState
      
    case ADD_SCORE: // fallsthrough
    case SUBSTRACT_SCORE: // fallsthrough
    case UPDATE_SCORES:
      return redirectToScoreReducer(state, action)

    default:
      return state
  }
}

const redirectToScoreReducer = (state: ScoreCardState, action: ScoreAction): ScoreCardState => ({
  ...state,
  players: scoreReducer(state.players, action)
})

export default scoreCardReducer