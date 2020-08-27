import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { ScoreRow } from '../types'

const updateScore = async (id: string, score: ScoreRow): Promise<ScoreRow|void> =>
  axios.put<ScoreRow>(`${scoreCardsUrl}/${id}/scores`, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { updateScore }