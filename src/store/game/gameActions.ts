import {
  END_GAME, START_GAME, SWITCH_HOLE,
  GameAction
} from './gameTypes'

export const startGame = (): GameAction => ({
  type: START_GAME
})

export const endGame = (): GameAction => ({
  type: END_GAME
})

export const switchHole = (hole: number): GameAction => ({
  type: SWITCH_HOLE,
  hole
})