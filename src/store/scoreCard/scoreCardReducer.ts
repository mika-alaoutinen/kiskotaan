import { SELECT_COURSE, SELECT_PLAYER, ScoreCardAction, ScoreCardState } from './scoreCardTypes'

const initialState: ScoreCardState = {
  id: '',
  date: new Date(),
  course: {
    id: '',
    name: '',
    holes: [],
    par: 0
  },
  players: [],
  rows: []
}

const scoreCardReducer = (state: ScoreCardState = initialState, action: ScoreCardAction): ScoreCardState => {
  switch (action.type) {
    case SELECT_COURSE:
      return {
        ...state,
        course: action.course
      }
    case SELECT_PLAYER:
      return {
        ...state,
        players: state.players.concat(action.player)
      }
    default:
      return state
  }
}

export default scoreCardReducer