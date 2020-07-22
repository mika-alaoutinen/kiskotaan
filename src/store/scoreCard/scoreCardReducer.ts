import { CREATE_SCORECARD, ScoreCardAction, ScoreCardState } from './scoreCardTypes'
import { resetCard } from './newScoreCardActions'

const initialState: ScoreCardState = {
  id: '',
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
  rows: [],
  date: new Date()
}

const scoreCardReducer = (state: ScoreCardState = initialState, action: ScoreCardAction): ScoreCardState => {
  switch (action.type) {

    case CREATE_SCORECARD:
      return createScoreCard(action.scorecard)
  
    default:
      return state
  }
}

const createScoreCard = (scoreCard: ScoreCardState): ScoreCardState => {
  resetCard()
  return scoreCard
}

export default scoreCardReducer