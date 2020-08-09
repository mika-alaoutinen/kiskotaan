import axios from 'axios'
import { scoreCardsUrl } from '../constants'
import { Score } from '../types'

const updateScore = async (id: string, score: Score): Promise<Score|void> =>
  axios.put<Score>(scoreCardsUrl + '/' + id, score)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { updateScore }