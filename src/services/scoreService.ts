import axios from 'axios'
import { baseUrl } from '../constants'
import { ScoreCard, ScoreCardRow } from '../types'

const url = `${baseUrl}/scores`

const getScoreCard = async (): Promise<ScoreCard|void> =>
  axios.get<ScoreCard>(url)
    .then(response => response.data)
    .catch(error => console.log(error))

const addScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(url, score)
    .then(response => response.data)
    .catch(error => console.log(error))

const updateScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.put<ScoreCard>(url, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getScoreCard, addScore, updateScore }