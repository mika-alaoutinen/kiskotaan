import { UPDATE_SCORES, ScoreAction, ScoreState } from './scoreTypes'

const scoreReducer = (state: ScoreState = [], action: ScoreAction): ScoreState => {
  switch (action.type) {

    case UPDATE_SCORES:
      const { hole, scores } = action.row
      return [
        ...state,
        { hole, scores }
      ]

    default:
      return state
  }
}

export default scoreReducer