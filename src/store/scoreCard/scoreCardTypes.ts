import { Course, Player, ScoreCard } from '../../types'

// Action names:
export const SELECT_COURSE = 'SELECT_COURSE'
export const SELECT_PLAYER = 'SELECT_PLAYER'

// Types for state and actions:
export type ScoreCardState = ScoreCard
export type ScoreCardAction = SelectCourseAction | SelectPlayerAction

interface SelectCourseAction {
  type: typeof SELECT_COURSE,
  course: Course
}

interface SelectPlayerAction {
  type: typeof SELECT_PLAYER,
  player: Player
}