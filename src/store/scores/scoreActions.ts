import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES, ScoreAction } from './scoreTypes'
import { ScoreRow } from '../../types'

export const addScore = (playerId: string, hole: number): ScoreAction => ({
  type: ADD_SCORE,
  playerId,
  hole
})

export const substractScore = (playerId: string, hole: number): ScoreAction => ({
  type: SUBSTRACT_SCORE,
  playerId,
  hole
})

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