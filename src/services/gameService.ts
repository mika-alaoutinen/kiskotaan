import axios from 'axios'
import { gamesUrl } from '../constants'
import { Game, ScoreCard } from '../types'

// import game from '../newGame.json'

// const startGame = async (scoreCard: ScoreCard): Promise<Game|void> =>
//   Promise.resolve(game)

// const endGame = async (id: string): Promise<Game|void> => {
//   const endedGame: Game = {
//     ...game,
//     isOver: true
//   }

//   return Promise.resolve(endedGame)
// }

const startGame = async (scoreCard: ScoreCard): Promise<Game|void> =>
  axios.post<Game>(gamesUrl, scoreCard)
    .then(response => response.data)
    .catch(error => console.log(error))

const endGame = async (id: string): Promise<Game|void> =>
  axios.post<Game>(gamesUrl, id)
  .then(response => response.data)
  .catch(error => console.log(error))

export default { startGame, endGame }