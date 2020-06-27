import axios from 'axios'
import { baseUrl } from '../constants'
import { Player } from '../types'

const url = `${baseUrl}/players`

const getAll = async (): Promise<Player[]|void> =>
  axios.get<Player[]>(url)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getAll, }