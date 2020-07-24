import { ScoreCard } from '../../types'

export const GET_SCORECARD = 'GET_SCORECARD'
export const CREATE_SCORECARD = 'CREATE_SCORECARD'
export const DELETE_SCORECARD = 'DELETE_SCORECARD'

// Types for state and actions:
export type ScoreCardState = ScoreCard
export type ScoreCardAction = GetScoreCardAction | CreateScoreCardAction | DeleteScoreCard

interface GetScoreCardAction {
  type: typeof GET_SCORECARD,
  scoreCard: ScoreCard
}

interface CreateScoreCardAction {
  type: typeof CREATE_SCORECARD,
  scoreCard: ScoreCard
}

export interface DeleteScoreCard {
  type: typeof DELETE_SCORECARD
}