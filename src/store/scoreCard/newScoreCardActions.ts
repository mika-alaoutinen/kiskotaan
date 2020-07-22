import {
  ADD_PLAYER_TO_CARD, REMOVE_PLAYER_FROM_CARD, SELECT_COURSE, NewScoreCardAction
} from './scoreCardTypes'

import { Course, Player } from '../../types'

export const selectCourse = (course: Course): NewScoreCardAction => ({
  type: SELECT_COURSE,
  course
})

export const addPlayerToCard = (player: Player): NewScoreCardAction => ({
  type: ADD_PLAYER_TO_CARD,
  player
})

export const removePlayerFromCard = (player: Player): NewScoreCardAction => ({
  type: REMOVE_PLAYER_FROM_CARD,
  player
})