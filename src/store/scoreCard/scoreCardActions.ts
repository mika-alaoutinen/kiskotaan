import { SELECT_COURSE, SELECT_PLAYER, ScoreCardAction } from '../scoreCard/scoreCardTypes'
import { Course, Player } from '../../types'

export const selectCourse = (course: Course): ScoreCardAction => ({
  type: SELECT_COURSE,
  course
})

export const selectPlayer = (player: Player): ScoreCardAction => ({
  type: SELECT_PLAYER,
  player
})