import scoreCardService from '../../services/scoreCardService'
import { AppThunk } from '../reduxTypes'
import { CREATE_SCORECARD, GET_SCORECARD } from './scoreCardTypes'
import { RESET_CARD } from '../newScoreCard/newScoreCardTypes'
import { NewScoreCard, ScoreCard } from '../../types'

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
    type: RESET_CARD
  })
}

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