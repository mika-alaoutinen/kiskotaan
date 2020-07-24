import { GameAction, GameState, START_GAME, END_GAME, SWITCH_HOLE } from './gameTypes'

const initialState: GameState = {
  date: undefined,
  hole: 1,
  isOver: false
}

const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {

    case START_GAME:
      return {
        ...state,
        date: new Date()
      }

    case END_GAME:
      return {
        ...state,
        isOver: true
      }

    case SWITCH_HOLE:
      return {
        ...state,
        hole: action.hole
      }

    default:
      return state
  }
}

export default gameReducer