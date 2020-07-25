import { ScoreRow } from '../../types'

// Action names:
export const MINUS_SCORE = 'MINUS_SCORE'
export const PLUS_SCORE = 'PLUS_SCORE'

// Types for state and actions:
export type ScoreState = ScoreRow
export type ScoreAction = MinusAction | PlusAction

interface MinusAction {
  type: typeof MINUS_SCORE,
  playerId: string,
  hole: number
}

interface PlusAction {
  type: typeof PLUS_SCORE,
  playerId: string,
  hole: number
}