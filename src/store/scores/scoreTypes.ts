import { ScoreRow } from '../../types'

// Action names:
export const ADD_SCORE = 'ADD_SCORE'
export const SUBSTRACT_SCORE = 'SUBSTRACT_SCORE'
export const UPDATE_SCORES = 'UPDATE_SCORES'

// Types for state and actions:
export type ScoreState = ScoreRow[]
export type ScoreAction = AddScore | SubstractScore | UpdateScores

interface AddScore {
  type: typeof ADD_SCORE,
  hole: number,
  row: ScoreRow
}

interface SubstractScore {
  type: typeof SUBSTRACT_SCORE,
  hole: number,
  row: ScoreRow
}

interface UpdateScores {
  type: typeof UPDATE_SCORES,
  row: ScoreRow
}