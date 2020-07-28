import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES } from './scoreTypes'
import { Score, ScoreRow } from '../../types'

const updateScoreRow = (
  playerId: string, hole: number, scores: Score[], updatedScore: Score
): ScoreRow => {
  
  const updatedScores: Score[] = scores.map(score =>
    score.playerId === playerId ? updatedScore : score)
  
  return {
    hole,
    scores: updatedScores
  }
}

export const addScore = (playerId: string, hole: number): AppThunk =>
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
      score: currentScore + 1
    }

    dispatch({
      type: ADD_SCORE,
      hole,
      scoreRow: updateScoreRow(playerId, hole, row.scores, updatedScore)
    })
  }

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

  dispatch({
    type: SUBSTRACT_SCORE,
    hole,
    scoreRow: updateScoreRow(playerId, hole, row.scores, updatedScore)
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


// ***************************************************************************

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