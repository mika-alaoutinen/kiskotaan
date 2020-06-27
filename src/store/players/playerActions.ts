import { AppThunk } from '../reduxTypes'
import { GET_PLAYERS } from './playerTypes'
import playerService from '../../services/playerService'

// Action creators for players
export const getPlayers = (): AppThunk => async dispatch => {
  const players = await playerService.getAll()
  
  dispatch({
    type: GET_PLAYERS,
    players
  })
}