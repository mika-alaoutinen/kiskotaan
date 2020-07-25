import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { ScoreCard, ScoreRow } from '../types'

const addScore = async (score: ScoreRow): Promise<ScoreRow|void> =>
  axios.post<ScoreRow>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

// Not needed? Do you really want to return ScoreCard?
const updateScore = async (score: ScoreRow): Promise<ScoreCard|void> =>
  axios.put<ScoreCard>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { addScore, updateScore }