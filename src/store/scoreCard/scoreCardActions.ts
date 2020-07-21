import {
  ADD_PLAYER_TO_CARD, REMOVE_PLAYER_FROM_CARD, SELECT_COURSE, ScoreCardAction
} from '../scoreCard/scoreCardTypes'

import { Course, Player } from '../../types'

export const selectCourse = (course: Course): ScoreCardAction => ({
  type: SELECT_COURSE,
  course
})

export const addPlayer = (player: Player): ScoreCardAction => ({
  type: ADD_PLAYER_TO_CARD,
  player
})

export const removePlayer = (player: Player): ScoreCardAction => ({
  type: REMOVE_PLAYER_FROM_CARD,
  player
})