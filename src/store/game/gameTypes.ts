import { Game } from '../../types'

// Action names:
export const START_GAME = 'START_GAME'
export const END_GAME = 'END_GAME'
export const SWITCH_HOLE = 'SWITCH_HOLE'

// Types for state and actions:
export type GameState = Game
export type GameAction = StartGameAction | EndGameAction | SwitchHoleAction

interface StartGameAction {
  type: typeof START_GAME
}

interface EndGameAction {
  type: typeof END_GAME
}

interface SwitchHoleAction {
  type: typeof SWITCH_HOLE,
  hole: number
}