import gameService from '../../services/gameService'
import { AppThunk } from '../reduxTypes'
import { Game, ScoreCard } from '../../types'

import {
  SCORE_HAS_CHANGED, END_GAME, START_GAME, SWITCH_HOLE, GameAction,
} from './gameTypes'


export const startGame = (): AppThunk => async (dispatch, getState) => {
  const scoreCard: ScoreCard = getState().scoreCard
  const game: Game|void = await gameService.startGame(scoreCard)

  if (!game) {
    return
  }
  
  dispatch({
    type: START_GAME,
    game
  })
}

export const endGame = (): GameAction => ({
  type: END_GAME
})

export const setScoreChanged = (): GameAction => ({
  type: SCORE_HAS_CHANGED
})

export const switchHole = (hole: number): GameAction => ({
  type: SWITCH_HOLE,
  hole
})