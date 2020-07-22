import { Course, NewScoreCard, Player, ScoreCard } from '../../types'

// Action names:
export const SELECT_COURSE = 'SELECT_COURSE'
export const ADD_PLAYER_TO_CARD = 'ADD_PLAYER_TO_CARD'
export const REMOVE_PLAYER_FROM_CARD = 'REMOVE_PLAYER_FROM_CARD'
export const RESET_CARD = 'RESET_CARD'
export const CREATE_SCORECARD = 'CREATE_SCORECARD'

// Types for state and actions:
export type NewScoreCardState = NewScoreCard
export type ScoreCardState = ScoreCard

export type NewScoreCardAction =
  | SelectCourseAction
  | AddPlayerAction
  | RemovePlayerAction
  | ResetCardAction
  
export type ScoreCardAction = CreateScoreCardAction

interface SelectCourseAction {
  type: typeof SELECT_COURSE,
  course: Course
}

interface AddPlayerAction {
  type: typeof ADD_PLAYER_TO_CARD,
  player: Player
}

interface RemovePlayerAction {
  type: typeof REMOVE_PLAYER_FROM_CARD,
  player: Player
}

interface ResetCardAction {
  type: typeof RESET_CARD
}

interface CreateScoreCardAction {
  type: typeof CREATE_SCORECARD,
  scorecard: ScoreCard
}