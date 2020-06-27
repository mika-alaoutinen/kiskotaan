import axios from 'axios'
import { baseUrl } from '../constants'
import { Player } from '../types'

const url = `${baseUrl}/players`

const getPlayers = async (): Promise<Player[]|void> =>
  axios.get<Player[]>(url)
    .then(response => response.data)
    .catch(error => console.log(error))

const getPlayer = async (id: string): Promise<Player|void> =>
  axios.get<Player>(url + '/' + id)
    .then(response => response.data)
    .catch(error => console.log(error))

const addPlayer = async (player: Player): Promise<Player|void> =>
  axios.post<Player>(url, player)
    .then(response => response.data)
    .catch(error => console.log(error))

const deletePlayer = (id: string): void => {
  axios.delete(url + '/' + id)
    .catch(error => console.log(error))
}

export default { getPlayers, getPlayer, addPlayer, deletePlayer }