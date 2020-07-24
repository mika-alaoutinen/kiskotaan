import {
  CREATE_SCORECARD, DELETE_SCORECARD, GET_SCORECARD, ScoreCardAction, ScoreCardState
} from './scoreCardTypes'

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

    case GET_SCORECARD:
      return action.scoreCard
    
    case CREATE_SCORECARD:
      return action.scoreCard
  
    case DELETE_SCORECARD:
      return initialState
      
    default:
      return state
  }
}

export default scoreCardReducer