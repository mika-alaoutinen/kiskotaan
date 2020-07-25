import { MINUS_SCORE, PLUS_SCORE, ScoreAction } from './scoreTypes'

export const minusScore = (playerId: string, hole: number): ScoreAction => ({
  type: MINUS_SCORE,
  playerId,
  hole
})

export const plusScore = (playerId: string, hole: number): ScoreAction => ({
  type: PLUS_SCORE,
  playerId,
  hole
})