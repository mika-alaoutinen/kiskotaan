import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { UPDATE_SCORES } from './scoreTypes'
import { ScoreRow } from '../../types'

export const updateScores = (hole: number): AppThunk =>
  async (dispatch, getState) => {

  const scoreRow = findRow(hole, getState().scoreCard.rows)

  const row = scoreRow
    ? await scoreService.addScore(scoreRow)
    : undefined

  if (!row) {
    return
  }

  dispatch({
    type: UPDATE_SCORES,
    row
  })
}

const findRow = (hole: number, rows: ScoreRow[]): ScoreRow|undefined => 
  rows.find(row => row.hole === hole)