import {
  SUBSTRACT_SCORE, UPDATE_SCORES,
  ScoreAction, ScoreState
} from './scoreTypes'
import { ScoreRow, Score } from '../../types'

const scoreReducer = (state: ScoreState = [], action: ScoreAction): ScoreState => {
  switch (action.type) {

    case SUBSTRACT_SCORE:
      const { playerId, hole, currentScore } = action
      return substract(state, playerId, hole, currentScore)
    
    case UPDATE_SCORES:
      return [
        ...state,
        {
          hole: action.row.hole,
          scores: action.row.scores
        }
      ]
      
    default:
      return state
  }
}

const substract = (
  state: ScoreState, playerId: string, hole: number, newScore: number
): ScoreState => {

  const updatedScore: Score = {
    playerId,
    score: newScore
  }
  
  const row: ScoreRow|undefined = state.find(row => row.hole === hole)
  if (!row) {
    return state
  }

  const updatedScores:Score[] = row.scores.map(score => score.playerId === playerId ? updatedScore : score)
  
  return [
    ...state,
    {
      hole,
      scores: updatedScores
    }
  ]
}

export default scoreReducer