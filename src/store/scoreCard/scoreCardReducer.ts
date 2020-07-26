import {
  CREATE_SCORECARD, DELETE_SCORECARD, GET_SCORECARD,
  ScoreCardAction, ScoreCardState
} from './scoreCardTypes'

import {
  ADD_SCORE, SUBSTRACT_SCORE, UPDATE_SCORES, ScoreAction
} from '../scores/scoreTypes'

import scoreReducer from '../scores/scoreReducer'

const initialState: ScoreCardState = {
  id: '',
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
  rows: [{
    hole: 1,
    scores: []
  }]
}

const scoreCardReducer = (
  state: ScoreCardState = initialState, action: ScoreCardAction): ScoreCardState => {

  switch (action.type) {

    case GET_SCORECARD:
      return action.scoreCard
    
    case CREATE_SCORECARD:
      return action.scoreCard
  
    case DELETE_SCORECARD:
      return initialState
      
    case ADD_SCORE:
      return redirectToScoreReducer(state, action)
      
    case SUBSTRACT_SCORE:
      const newState = redirectToScoreReducer(state, action)
      console.log('score card reducer')
      console.log(newState)
      return newState
      
    case UPDATE_SCORES:
      return {
        ...state,
        rows: scoreReducer(state.rows, action)
      }

    default:
      return state
  }
}

const redirectToScoreReducer = (state: ScoreCardState, action: ScoreAction): ScoreCardState => ({
  ...state,
  rows: scoreReducer(state.rows, action)
})

export default scoreCardReducer