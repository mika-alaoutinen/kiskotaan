import { ScoreRow } from '../../types'

// Action names:
export const SUBSTRACT_SCORE = 'SUBSTRACT_SCORE'
export const UPDATE_SCORES = 'UPDATE_SCORES'

// Types for state and actions:
export type ScoreState = ScoreRow[]
export type ScoreAction = SubstractScore | UpdateScores

interface SubstractScore {
  type: typeof SUBSTRACT_SCORE,
  playerId: string,
  hole: number,
  currentScore: number // not needed necessarily!
}

interface UpdateScores {
  type: typeof UPDATE_SCORES,
  row: ScoreRow
}