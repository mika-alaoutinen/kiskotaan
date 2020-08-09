import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { PlayerScore } from '../types'

const updateScores = async (id: string, scores: PlayerScore[]): Promise<PlayerScore[]|void> =>
  axios.put<PlayerScore[]>(scoreCardsUrl + '/' + id, scores)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { updateScores }