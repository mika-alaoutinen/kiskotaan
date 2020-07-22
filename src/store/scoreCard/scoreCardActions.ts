import { AppThunk } from '../reduxTypes'
import { CREATE_SCORECARD } from './scoreCardTypes'
import { NewScoreCard, ScoreCard } from '../../types'
import scoreCardService from '../../services/scoreCardService'

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