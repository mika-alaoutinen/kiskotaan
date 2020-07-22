import { CREATE_SCORECARD, ScoreCardAction, ScoreCardState } from './scoreCardTypes'

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
      return action.scorecard
  
    default:
      return state
  }
}

export default scoreCardReducer