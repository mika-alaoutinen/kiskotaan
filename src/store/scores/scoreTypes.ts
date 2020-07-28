import { ScoreRow } from '../../types'

// Action names:
export const CHANGE_SCORE = 'CHANGE_SCORE'
export const UPDATE_SCORES = 'UPDATE_SCORES'

// Types for state and actions:
export type ScoreState = ScoreRow[]
export type ScoreAction = ChangeScore | UpdateScores

interface ChangeScore {
  type: typeof CHANGE_SCORE,
  hole: number,
  row: ScoreRow
}

interface UpdateScores {
  type: typeof UPDATE_SCORES,
  hole: number,
  row: ScoreRow
}