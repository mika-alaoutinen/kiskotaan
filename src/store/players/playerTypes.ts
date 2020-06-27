import { Player } from '../../types'

// Action names:
export const GET_PLAYERS = 'GET_PLAYERS'

// Interfaces:
export interface PlayerState {
  readonly players: Player[]
}

// Types:
export type PlayerActionTypes = GetPlayersAction

// Private type definitions:
interface GetPlayersAction {
  type: typeof GET_PLAYERS,
  players: Player[]
}