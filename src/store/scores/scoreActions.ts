import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { CHANGE_SCORE, UPDATE_SCORES, ChangeScore } from './scoreTypes'
import { Score, ScoreCard, ScoreRow } from '../../types'
import { setScoreChanged } from '../game/gameActions'

export const addScore = (playerId: string, hole: number): AppThunk =>
  (dispatch, getState) => {
    
    const rows: ScoreRow[] = getState().game.scoreCard.rows
    dispatch(setScoreChanged())
    dispatch(addOrSubstractScore(rows, playerId, hole, 1))
  }

export const substractScore = (playerId: string, hole: number): AppThunk =>
  (dispatch, getState) => {

  const rows: ScoreRow[] = getState().game.scoreCard.rows
  dispatch(setScoreChanged())
  dispatch(addOrSubstractScore(rows, playerId, hole, -1))
}

export const updateScores = (hole: number): AppThunk =>
  async (dispatch, getState) => {

  const scoreCard: ScoreCard = getState().game.scoreCard
  const scoreRow: ScoreRow|undefined = scoreCard.rows.find(row => row.hole === hole)
  const row = scoreRow
    ? await scoreService.updateScore(scoreCard.id, scoreRow)
    : undefined

  if (!row) {
    return
  }

  dispatch({
    type: UPDATE_SCORES,
    hole,
    row
  })
}

const addOrSubstractScore = (
  rows: ScoreRow[], playerId: string, hole: number, scoreModifier: 1|-1
): ChangeScore => {

  const scores: Score[] = findScoresForHole(rows, hole)
  const currentScore: number = findCurrentScore(rows, playerId, hole)
  const updatedScore: Score = {
    playerId,
    score: currentScore + scoreModifier
  }

  return {
    type: CHANGE_SCORE,
    hole,
    row: updateScoreRow(playerId, hole, scores, updatedScore)
  }
}

const findScoresForHole = (rows: ScoreRow[], hole: number): Score[] => {
  const row: ScoreRow|undefined = rows.find(row => row.hole === hole)
  return row ? row.scores : []
}

const findCurrentScore = (
  rows: ScoreRow[], playerId: string, hole: number
): number => {

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