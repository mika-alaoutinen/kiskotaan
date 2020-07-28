import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES } from './scoreTypes'
import { Score, ScoreRow } from '../../types'

export const addScore = (playerId: string, hole: number): AppThunk =>
  (dispatch, getState) => {
    
    const rows: ScoreRow[] = getState().scoreCard.rows
    const scores: Score[] = findScoresForHole(rows, hole)
    const currentScore: number = findCurrentScore(rows, playerId, hole)

    const updatedScore: Score = {
      playerId,
      score: currentScore + 1
    }

    dispatch({
      type: ADD_SCORE,
      hole,
      scoreRow: updateScoreRow(playerId, hole, scores, updatedScore)
    })
  }

export const substractScore = (playerId: string, hole: number): AppThunk =>
  (dispatch, getState) => {

  const rows: ScoreRow[] = getState().scoreCard.rows
  const scores: Score[] = findScoresForHole(rows, hole)
  const currentScore: number = findCurrentScore(rows, playerId, hole)

  const updatedScore: Score = {
    playerId,
    score: currentScore - 1
  }

  dispatch({
    type: SUBSTRACT_SCORE,
    hole,
    scoreRow: updateScoreRow(playerId, hole, scores, updatedScore)
  })
}

export const updateScores = (hole: number): AppThunk =>
  async (dispatch, getState) => {

  const rows: ScoreRow[] = getState().scoreCard.rows
  const scoreRow: ScoreRow|undefined = rows.find(row => row.hole === hole)

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

const findScoresForHole = (rows: ScoreRow[], hole: number): Score[] => {
  const row: ScoreRow|undefined = rows.find(row => row.hole === hole)
  return row ? row.scores : []
}

const findCurrentScore = (rows: ScoreRow[], playerId: string, hole: number): number => {
  const score: number|undefined =  rows.find(row => row.hole === hole)
    ?.scores.find(score => score.playerId === playerId)
    ?.score
  
  return score ? score : 0
}
  
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