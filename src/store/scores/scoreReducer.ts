import {
  ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES,
  ScoreAction, ScoreState
} from './scoreTypes'

import { ScoreRow, Score } from '../../types'

const scoreReducer = (state: ScoreState = [], action: ScoreAction): ScoreState => {
  switch (action.type) {

    case ADD_SCORE:
      return addScore(state, action.playerId, action.hole)
    
    case SUBSTRACT_SCORE:
      return changeScore(state, action.scoreRow, action.hole)
      
    // TODO: can this be deleted?
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

const changeScore = (state: ScoreState, updatedRow: ScoreRow, hole: number) =>
  state.map(row => row.hole === hole ? updatedRow : row)

const addScore = (state: ScoreState, playerId: string, hole: number): ScoreState => {
  // TODO
  return state
}

const substractScore = (state: ScoreState, playerId: string, hole: number): ScoreState => {
  const row: ScoreRow|undefined = state.find(row => row.hole === hole)
  if (!row) {
    return state
  }

  const currentScore: number|undefined = getCurrentScore(state, playerId,  hole)
  if (!currentScore) {
    return state
  }

  const updatedScore: Score = {
    playerId,
    score: currentScore - 1
  }

  const updatedScores: Score[] = row.scores.map(score => score.playerId === playerId ? updatedScore : score)

  const updatedRow: ScoreRow = {
    hole,
    scores: updatedScores
  }

  return state.map(row => row.hole === hole ? updatedRow : row)
}

const getCurrentScore = (
  rows: ScoreRow[], playerId: string, hole: number
): number|undefined =>

  rows.find(row => row.hole === hole)
    ?.scores.find(score => score.playerId === playerId)
    ?.score

export default scoreReducer