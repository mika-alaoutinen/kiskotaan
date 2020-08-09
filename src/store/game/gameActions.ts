import gameService from '../../services/gameService'
import { AppThunk } from '../reduxTypes'
import { Game } from '../../types'
import { createNewScoreCard } from '../scoreCard/scoreCardActions'

import {
  SCORE_HAS_CHANGED, END_GAME, START_GAME, SWITCH_HOLE, GameAction,
} from './gameTypes'


export const startGame = (): AppThunk => async (dispatch, getState) => {
  dispatch(createNewScoreCard())
  
  const scoreCardId: string = getState().game.scoreCard.id
  const game: Game|void = await gameService.startGame(scoreCardId)

  if (!game) {
    return
  }
  
  dispatch({
    type: START_GAME,
    game
  })
}

export const endGame = (): AppThunk => async (dispatch, getState) => {
  const id: string = getState().game.id
  const game: Game|void = await gameService.endGame(id)

  if (!game) {
    return
  }

  dispatch({
    type: END_GAME,
    game
  })
}

export const setScoreChanged = (): GameAction => ({
  type: SCORE_HAS_CHANGED
})

export const switchHole = (hole: number): GameAction => ({
  type: SWITCH_HOLE,
  hole
})