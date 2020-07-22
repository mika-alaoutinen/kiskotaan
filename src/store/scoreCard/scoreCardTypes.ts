import { ScoreCard } from '../../types'

export const CREATE_SCORECARD = 'CREATE_SCORECARD'

// Types for state and actions:
export type ScoreCardState = ScoreCard
export type ScoreCardAction = CreateScoreCardAction

interface CreateScoreCardAction {
  type: typeof CREATE_SCORECARD,
  scorecard: ScoreCard
}