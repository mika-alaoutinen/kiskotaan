import { SELECT_COURSE, SELECT_PLAYER, ScoreCardAction, ScoreCardState } from './scoreCardTypes'
import { Player } from '../../types'

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
      return state.players.includes(action.player)
        ? state
        : addPlayerToCard(state, action.player)
        
    default:
      return state
  }
}

const addPlayerToCard = (state: ScoreCardState, player: Player): ScoreCardState => ({
  ...state,
  players: state.players.concat(player)
})

export default scoreCardReducer