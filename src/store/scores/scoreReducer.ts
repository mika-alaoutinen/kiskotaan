import {
  MINUS_SCORE, PLUS_SCORE,
  ScoreAction, ScoreState
} from './scoreTypes'

const initialState: ScoreState = {
  hole: 1,
  scores: []
}

const scoreReducer = (state: ScoreState = initialState, action: ScoreAction): ScoreState => {
  switch (action.type) {

    case MINUS_SCORE:
      return state
  
    case PLUS_SCORE:
      return state

    default:
      return state
  }
}

export default scoreReducer