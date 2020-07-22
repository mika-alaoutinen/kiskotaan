import {
  ADD_PLAYER_TO_CARD, CREATE_SCORECARD, REMOVE_PLAYER_FROM_CARD, SELECT_COURSE, ScoreCardAction
} from '../scoreCard/scoreCardTypes'

import { AppThunk } from '../reduxTypes'
import { Course, NewScoreCard, Player, ScoreCard } from '../../types'
import scoreCardService from '../../services/scoreCardService'

export const selectCourse = (course: Course): ScoreCardAction => ({
  type: SELECT_COURSE,
  course
})

export const addPlayerToCard = (player: Player): ScoreCardAction => ({
  type: ADD_PLAYER_TO_CARD,
  player
})

export const removePlayerFromCard = (player: Player): ScoreCardAction => ({
  type: REMOVE_PLAYER_FROM_CARD,
  player
})

/**
 * Persists the new score card to backend once it has been filled in.
 * @param newScoreCard scoreCard without ID.
 */
export const createNewScoreCard = (newScoreCard: NewScoreCard): AppThunk => async dispatch => {
  const scoreCard: ScoreCard|void = await scoreCardService.createScoreCard(newScoreCard)

  dispatch({
    type: CREATE_SCORECARD,
    scoreCard
  })
}