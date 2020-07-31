import scoreCardReducer, { initialState as scoreCardState } from '../scoreCard/scoreCardReducer'
import { CREATE_SCORECARD, ScoreCardAction, DELETE_SCORECARD, GET_SCORECARD } from '../scoreCard/scoreCardTypes'

import { CHANGE_SCORE, UPDATE_SCORES } from '../scores/scoreTypes'
import { START_GAME, END_GAME, SWITCH_HOLE, SCORE_HAS_CHANGED, GameAction, GameState } from './gameTypes'

const initialState: GameState = {
  id: '',
  hasScoreChanged: false,
  hole: 1,
  isOver: false,
  scoreCard: scoreCardState,
  date: new Date(),
}

const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {

    case START_GAME:
      return action.game

    case END_GAME:
      return action.game

    case SCORE_HAS_CHANGED:
      return {
        ...state,
        hasScoreChanged: true
      }

    case SWITCH_HOLE:
      return {
        ...state,
        hasScoreChanged: false,
        hole: action.hole
      }

    case GET_SCORECARD:     // fallsthrough
    case CREATE_SCORECARD:  // fallsthrough
    case DELETE_SCORECARD:  // fallsthrough
    case CHANGE_SCORE:      // fallsthrough
    case UPDATE_SCORES:
      return redirectToScoreCardReducer(state, action)

    default:
      return state
  }
}

const redirectToScoreCardReducer = (state: GameState, action: ScoreCardAction): GameState => ({
  ...state,
  scoreCard: scoreCardReducer(state.scoreCard, action)
})

export default gameReducer