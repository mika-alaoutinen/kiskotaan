import scoreCardService from '../../services/scoreCardService'
import { AppThunk } from '../reduxTypes'
import { CREATE_SCORECARD } from './scoreCardTypes'
import { RESET_CARD } from '../newScoreCard/newScoreCardTypes'
import { NewScoreCard, ScoreCard } from '../../types'

/**
 * Persists the new score card to backend once it has been filled in.
 */
export const createNewScoreCard = (): AppThunk => async (dispatch, getState) => {
  const newScoreCard: NewScoreCard = getState().newScoreCard
  const scoreCard: ScoreCard|void = await scoreCardService.createScoreCard(newScoreCard)

  dispatch({
    type: CREATE_SCORECARD,
    scoreCard
  })

  dispatch({
    type: RESET_CARD
  })
}