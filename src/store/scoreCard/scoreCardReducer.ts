import {
  CREATE_SCORECARD, DELETE_SCORECARD, GET_SCORECARD,
  ScoreCardAction, ScoreCardState
} from './scoreCardTypes'

import scoreReducer from '../scores/scoreReducer'
import { UPDATE_SCORES } from '../scores/scoreTypes'

const initialState: ScoreCardState = {
  id: '',
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
  rows: [{
    hole: 1,
    scores: []
  }]
}

const scoreCardReducer = (
  state: ScoreCardState = initialState, action: ScoreCardAction): ScoreCardState => {

  switch (action.type) {

    case GET_SCORECARD:
      return action.scoreCard
    
    case CREATE_SCORECARD:
      return action.scoreCard
  
    case DELETE_SCORECARD:
      return initialState
      
    case UPDATE_SCORES:
      return {
        ...state,
        rows: scoreReducer(state.rows, action)
      }

    default:
      return state
  }
}

export default scoreCardReducer