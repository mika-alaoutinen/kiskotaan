import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES, ScoreAction } from './scoreTypes'
import { Score, ScoreRow } from '../../types'

export const addScore = (playerId: string, hole: number): AppThunk =>
  (dispatch, getState) => {
    
    const rows: ScoreRow[] = getState().scoreCard.rows

  }

// export const substractScore = (playerId: string, hole: number): ScoreAction => ({
//   type: SUBSTRACT_SCORE,
//   playerId,
//   hole
// })

export const substractScore = (playerId: string, hole: number): AppThunk =>
  (dispatch, getState) => {

  const rows: ScoreRow[] = getState().scoreCard.rows

  const row: ScoreRow|undefined = findRow(rows, hole)
  if (!row) {
    return
  }

  const currentScore: number|undefined = findCurrentScore(rows, playerId, hole)
  if (!currentScore) {
    return
  }

  const updatedScore: Score = {
    playerId,
    score: currentScore - 1
  }
  
  const updatedRow: ScoreRow = {
    hole,
    scores: updateScoreRow(row, playerId, updatedScore)
  }

  dispatch({
    type: SUBSTRACT_SCORE,
    hole,
    scoreRow: updatedRow
  })
}

export const updateScores = (hole: number): AppThunk =>
  async (dispatch, getState) => {

  const rows: ScoreRow[] = getState().scoreCard.rows
  const scoreRow: ScoreRow|undefined = findRow(rows, hole)

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

const findRow = (rows: ScoreRow[], hole: number): ScoreRow|undefined => 
  rows.find(row => row.hole === hole)

const findCurrentScore = (
  rows: ScoreRow[], playerId: string, hole: number
): number|undefined =>

  rows.find(row => row.hole === hole)
    ?.scores.find(score => score.playerId === playerId)
    ?.score

const updateScoreRow = (row: ScoreRow, playerId: string, updatedScore: Score): Score[] =>
  row.scores.map(score => score.playerId === playerId ? updatedScore : score)