import scoreService from '../../services/scoreService'
import { AppThunk } from '../reduxTypes'
import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES } from './scoreTypes'
import { setScoreChanged } from '../game/gameActions'
import { PlayerScore, Score } from '../../types'

export const addScore = (playerId: string, hole: number): AppThunk => dispatch => {
  dispatch({
    type: ADD_SCORE,
    playerId,
    hole
  })

  dispatch(setScoreChanged())
}

export const substractScore = (playerId: string, hole: number): AppThunk => dispatch => {
  dispatch({
    type: SUBSTRACT_SCORE,
    playerId,
    hole
  })
  
  dispatch(setScoreChanged())
}

export const updateScores = (hole: number): AppThunk => async (dispatch, getState) => {
  const { id, players } = getState().game.scoreCard

  const playerScores: PlayerScore[] = players.map(player => {
    const score: Score|undefined = player.scores.find(score => score.hole === hole)
    return {
      playerId: player.id,
      score: {
        hole,
        score: score ? score.score : -1
      }
    }
  })

  const updated: PlayerScore[]|void = await scoreService.updateScores(id, playerScores)
  if (!updated) {
    return
  }
  
  dispatch({
    type: UPDATE_SCORES,
    scores: updated
  })
}