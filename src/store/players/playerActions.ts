import { AppThunk } from '../reduxTypes'
import { ADD_PLAYER, DELETE_PLAYER, GET_PLAYERS } from './playerTypes'
import { NewPlayer, Player } from '../../types'
import playerService from '../../services/playerService'

export const addPlayer = (newPlayer: NewPlayer): AppThunk => async dispatch => {
  const player: Player|void = await playerService.createPlayer(newPlayer)

  // TODO: how should I handle errors from service?
  if (!player) {
    return
  }

  dispatch({
    type: ADD_PLAYER,
    player
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