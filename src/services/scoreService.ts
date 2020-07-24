import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { ScoreCard, ScoreRow } from '../types'

const addScore = async (score: ScoreRow): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

const updateScore = async (score: ScoreRow): Promise<ScoreCard|void> =>
  axios.put<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { addScore, updateScore }