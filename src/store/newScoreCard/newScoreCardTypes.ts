import { Course, NewScoreCard, Player } from '../../types'

// Action names:
export const SELECT_COURSE = 'SELECT_COURSE'
export const ADD_PLAYER_TO_CARD = 'ADD_PLAYER_TO_CARD'
export const REMOVE_PLAYER_FROM_CARD = 'REMOVE_PLAYER_FROM_CARD'
export const RESET_CARD = 'RESET_CARD'

// Types for state and actions:
export type NewScoreCardState = NewScoreCard
export type NewScoreCardAction =
  | SelectCourseAction
  | AddPlayerAction
  | RemovePlayerAction
  | ResetCardAction

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