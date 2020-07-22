import axios from 'axios'
import { scoresUrl } from '../constants'
import { NewScoreCard, ScoreCard, ScoreCardRow } from '../types'

const getScoreCard = async (): Promise<ScoreCard|void> =>
  axios.get<ScoreCard>(scoresUrl)
    .then(response => response.data)
    .catch(error => console.log(error))

const createScoreCard = async (newScoreCard: NewScoreCard): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(scoresUrl, newScoreCard)
    .then(response => response.data)
    .catch(error => console.log(error))

const addScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(scoresUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

const updateScore = async (score: ScoreCardRow): Promise<ScoreCard|void> =>
  axios.put<ScoreCard>(scoresUrl, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getScoreCard, createScoreCard, addScore, updateScore }