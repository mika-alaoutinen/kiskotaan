import { ScoreRow } from '../../types'

// Action names:
export const UPDATE_SCORES = 'UPDATE_SCORES'

// Types for state and actions:
export type ScoreState = ScoreRow[]
export type ScoreAction = UpdateScores

interface UpdateScores {
  type: typeof UPDATE_SCORES,
  row: ScoreRow
}