import { ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES, ScoreAction, ScoreState } from './scoreTypes'
import { Player, Score } from '../../types'

const scoreReducer = (state: ScoreState = [], action: ScoreAction): ScoreState => {
  switch (action.type) {
    
    case ADD_SCORE:
      return addOrSubstract(state, action.playerId, action.hole, +1)

    case SUBSTRACT_SCORE:
      return addOrSubstract(state, action.playerId, action.hole, -1)

    case UPDATE_SCORES:
      return state
            
    default:
      return state
  }
}

const addOrSubstract = (
  state: ScoreState, playerId: string, hole: number, scoreModifier: -1|1
): ScoreState => {

  const editedPlayer: Player|undefined = state.find(player => player.id === playerId)
  if (!editedPlayer) {
    return state
  }

  const editedScores: Score[] = editedPlayer.scores.map(score => score.hole === hole
    ? {
      ...score,
      score: score.score + scoreModifier
    }
    : score
  )

  editedPlayer.scores = editedScores

  return state.map(player => player.id === editedPlayer.id ? editedPlayer : player)
}

export default scoreReducer