import axios, { AxiosResponse } from 'axios'
import { scoreCardsUrl } from '../constants'
import { NewScoreCard, ScoreCard } from '../types'

const getScoreCard = async (id: string): Promise<ScoreCard|void> =>
  axios.get<ScoreCard>(scoreCardsUrl + '/' + id)
    .then(response => response.data)
    .catch(error => console.log(error))

const createScoreCard = async (newScoreCard: NewScoreCard): Promise<ScoreCard|void> =>
  axios.post<ScoreCard>(scoreCardsUrl, newScoreCard)
    .then(response => response.data)
    .catch(error => console.log(error))

const deleteScoreCard = async (id: string): Promise<void|AxiosResponse<void>> =>
  axios.delete<void>(scoreCardsUrl + '/' + id)
    .catch(error => console.log(error))

export default { getScoreCard, createScoreCard, deleteScoreCard }