import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { NewScoreCard, ScoreCard, ScoreCardRow } from '../types'

const getScoreCard = async (): Promise<ScoreCard|void> =>
  axios.get<ScoreCard>(scoreCardsUrl)
    .then(response => response.data)
    .catch(error => console.log(error))

// const createScoreCard = async (newScoreCard: NewScoreCard): Promise<ScoreCard|void> =>
//   axios.post<ScoreCard>(scoreCardUrl, newScoreCard)
//     .then(response => response.data)
//     .catch(error => console.log(error))

const createScoreCard = async (newScoreCard: NewScoreCard): Promise<ScoreCard|void> => {
  console.log('service', newScoreCard)

  const scoreCard = {
    id: 'test',
    course: {
      id: 'test',
      name: 'test course',
      holes: [
        {
          number: 1,
          par: 3,
          distance: 100
        }
      ],
      par: 3
    },
    players: [
      {
        id: 'test',
        name: 'Pekka'
      }
    ],
    rows: [

    ],
  }

  return Promise.resolve(scoreCard)
}

const addScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

const updateScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.put<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getScoreCard, createScoreCard, addScore, updateScore }