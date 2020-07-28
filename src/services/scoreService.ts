import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { ScoreRow } from '../types'

const addScore = async (score: ScoreRow): Promise<ScoreRow|void> =>
  axios.post<ScoreRow>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

const updateScore = async (score: ScoreRow): Promise<ScoreRow|void> =>
  axios.put<ScoreRow>(scoreCardsUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { addScore, updateScore }