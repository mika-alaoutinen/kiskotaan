import { Player, PlayerScore } from '../../types'

// Action names:
export const ADD_SCORE = 'ADD_SCORE'
export const SUBSTRACT_SCORE = 'SUBSTRACT_SCORE'
export const UPDATE_SCORES = 'UPDATE_SCORES'

// Types for state and actions:
export type ScoreState = Player[]
export type ScoreAction = AddScore | SubstractScore | UpdateScores

export interface AddScore {
  type: typeof ADD_SCORE,
  playerId: string,
  hole: number
}

export interface SubstractScore {
  type: typeof SUBSTRACT_SCORE,
  playerId: string,
  hole: number
}

export interface UpdateScores {
  type: typeof UPDATE_SCORES,
  scores: PlayerScore[]
}