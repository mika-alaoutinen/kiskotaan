import { AppThunk } from '../reduxTypes'
import { ADD_PLAYER, DELETE_PLAYER, GET_PLAYERS } from './playerTypes'
import { Player } from '../../types'
import playerService from '../../services/playerService'

export const addPlayer = (player: Player): AppThunk => async dispatch => {
  const newPlayer: Player|void = await playerService.addPlayer(player)

  // TODO: how should I handle errors from service?
  if (!newPlayer) {
    return
  }

  dispatch({
    type: ADD_PLAYER,
    player: newPlayer
  })
}

export const deletePlayer = (id: string): AppThunk => async dispatch => {
  await playerService.deletePlayer(id)

  dispatch({
    type: DELETE_PLAYER,
    id
  })
}

export const getPlayers = (): AppThunk => async dispatch => {
  const players: Player[]|void = await playerService.getPlayers()

  dispatch({
    type: GET_PLAYERS,
    players
  })
}