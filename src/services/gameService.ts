import axios from 'axios'
import { gamesUrl } from '../constants'
import { Game, ScoreCard } from '../types'

const startGame = async (scoreCard: ScoreCard): Promise<Game|void> =>
  axios.post<Game>(gamesUrl, scoreCard)
    .then(response => response.data)
    .catch(error => console.log(error))

const endGame = async (id: string): Promise<Game|void> =>
  axios.post<Game>(gamesUrl, id)
  .then(response => response.data)
  .catch(error => console.log(error))

export default { startGame, endGame }