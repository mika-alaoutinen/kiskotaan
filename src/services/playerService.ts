import axios from 'axios'
import { playersUrl } from '../constants'
import { Player } from '../types'

const getPlayers = async (): Promise<Player[]|void> =>
  axios.get<Player[]>(playersUrl)
    .then(response => response.data)
    .catch(error => console.log(error))

const getPlayer = async (id: string): Promise<Player|void> =>
  axios.get<Player>(playersUrl + '/' + id)
    .then(response => response.data)
    .catch(error => console.log(error))

const addPlayer = async (player: Player): Promise<Player|void> =>
  axios.post<Player>(playersUrl, player)
    .then(response => response.data)
    .catch(error => console.log(error))

const deletePlayer = async (id: string): Promise<void> =>
  axios.delete<void>(playersUrl + '/' + id)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getPlayers, getPlayer, addPlayer, deletePlayer }