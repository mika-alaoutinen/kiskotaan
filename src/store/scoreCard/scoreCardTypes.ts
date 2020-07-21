import { Course, Player, ScoreCard } from '../../types'

// Action names:
export const SELECT_COURSE = 'SELECT_COURSE'
export const ADD_PLAYER_TO_CARD = 'ADD_PLAYER_TO_CARD'
export const REMOVE_PLAYER_FROM_CARD = 'REMOVE_PLAYER_FROM_CARD'

// Types for state and actions:
export type ScoreCardState = ScoreCard
export type ScoreCardAction = SelectCourseAction | AddPlayerAction | RemovePlayerAction

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