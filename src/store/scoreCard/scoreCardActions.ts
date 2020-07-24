import scoreCardService from '../../services/scoreCardService'
import { AppThunk } from '../reduxTypes'
import { CREATE_SCORECARD, DELETE_SCORECARD, GET_SCORECARD } from './scoreCardTypes'
import { RESET_NEW_CARD } from '../newScoreCard/newScoreCardTypes'
import { NewScoreCard, ScoreCard } from '../../types'

export const getScoreCard = (id: string): AppThunk => async dispatch => {
  const scoreCard: ScoreCard|void = await scoreCardService.getScoreCard(id)

  if (!scoreCard) {
    return
  }

  dispatch({
    type: GET_SCORECARD,
    scoreCard
  })
}

/**
 * Persists the new score card to backend once it has been filled in.
 * Resets the state of temporary newScoreCard.
 */
export const createNewScoreCard = (): AppThunk => async (dispatch, getState) => {
  const newScoreCard: NewScoreCard = getState().newScoreCard
  const scoreCard: ScoreCard|void = await scoreCardService.createScoreCard(newScoreCard)

  if (!scoreCard) {
    return
  }
  
  dispatch({
    type: CREATE_SCORECARD,
    scoreCard
  })

  dispatch({
    type: RESET_NEW_CARD
  })
}

export const deleteScoreCard = (id: string): AppThunk => dispatch => {
  void scoreCardService.deleteScoreCard(id)

  dispatch({
    type: DELETE_SCORECARD,
  })
}