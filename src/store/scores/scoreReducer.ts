import { CHANGE_SCORE, UPDATE_SCORES, ScoreAction, ScoreState } from './scoreTypes'
import { ScoreRow } from '../../types'

const scoreReducer = (state: ScoreState = [], action: ScoreAction): ScoreState => {
  switch (action.type) {
    
    case CHANGE_SCORE:
      return changeScore(state, action.row, action.hole)
    
    case UPDATE_SCORES:
      return changeScore(state, action.row, action.hole)
            
    default:
      return state
  }
}

const changeScore = (
  state: ScoreState, updatedRow: ScoreRow, hole: number
): ScoreState =>

  state.map(row => row.hole === hole ? updatedRow : row)

export default scoreReducer