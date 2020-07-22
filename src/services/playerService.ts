import axios from 'axios'
import { playersUrl } from '../constants'
import { NewPlayer, Player } from '../types'

const getPlayers = async (): Promise<Player[]|void> =>
  axios.get<Player[]>(playersUrl)
    .then(response => response.data)
    .catch(error => console.log(error))

const getPlayer = async (id: string): Promise<Player|void> =>
  axios.get<Player>(playersUrl + '/' + id)
    .then(response => response.data)
    .catch(error => console.log(error))

const createPlayer = async (newPlayer: NewPlayer): Promise<Player|void> =>
  axios.post<Player>(playersUrl, newPlayer)
    .then(response => response.data)
    .catch(error => console.log(error))

const deletePlayer = async (id: string): Promise<void> =>
  axios.delete<void>(playersUrl + '/' + id)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getPlayers, getPlayer, createPlayer, deletePlayer }