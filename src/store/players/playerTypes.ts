import { Player } from '../../types'

// Action names:
export const ADD_PLAYER = 'ADD_PLAYER'
export const DELETE_PLAYER = 'DELETE_PLAYER'
export const GET_PLAYERS = 'GET_PLAYERS'

// Interfaces:
export interface PlayerState {
  players: Player[]
}

// Types:
export type PlayerActionTypes = AddPlayerAction | DeletePlayerAction | GetPlayersAction

// Private type definitions:
interface AddPlayerAction {
  type: typeof ADD_PLAYER,
  player: Player
}

interface DeletePlayerAction {
  type: typeof DELETE_PLAYER,
  id: string
}

interface GetPlayersAction {
  type: typeof GET_PLAYERS,
  players: Player[]
}