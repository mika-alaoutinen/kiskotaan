import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { ScoreCard, ScoreCardRow } from '../types'

const addScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

const updateScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.put<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { addScore, updateScore }