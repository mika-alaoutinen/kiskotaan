import {
  ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES,
  ScoreAction, ScoreState
} from './scoreTypes'

import { ScoreRow } from '../../types'

const scoreReducer = (state: ScoreState = [], action: ScoreAction): ScoreState => {
  switch (action.type) {
    
    case ADD_SCORE:
      return changeScore(state, action.row, action.hole)
    
    case SUBSTRACT_SCORE:
      return changeScore(state, action.row, action.hole)
      
    case UPDATE_SCORES:
      return changeScore(state, action.row, action.hole)
            
    default:
      return state
  }
}

const changeScore = (state: ScoreState, updatedRow: ScoreRow, hole: number) =>
  state.map(row => row.hole === hole ? updatedRow : row)

export default scoreReducer