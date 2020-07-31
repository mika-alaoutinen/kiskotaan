import {
  START_GAME, END_GAME, SWITCH_HOLE, SCORE_HAS_CHANGED, GameAction, GameState
} from './gameTypes'

import { initialState as scoreCardState } from '../scoreCard/scoreCardReducer'

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

    default:
      return state
  }
}

export default gameReducer