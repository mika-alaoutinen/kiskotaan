import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'

import { Game, Hole } from '../../types'
import { switchHole } from '../../store/game/gameActions'
import { updateScores } from '../../store/scores/scoreActions'
import { useSelector } from '../../store/reduxTypes'

const HoleSelectionButtons: React.FC = () => {
  const dispatch = useDispatch()
  
  const game: Game = useSelector(state => state.game)
  const { hasScoreChanged, hole, scoreCard } = game
  const holes: Hole[] = scoreCard.course.holes
  
  const changeHoles = (newHole: number): void => {
    if (hasScoreChanged) {
      dispatch(updateScores(hole))
    }
    dispatch(switchHole(newHole))
  }
  
  return (
    <div>
      <Button
        color='primary'
        disabled={hole === 1}
        onClick={() => changeHoles(hole - 1)}
        startIcon={<NavigateBefore />}
        variant='contained'
      >
        Back
      </Button>

      <Button
        color='primary'
        disabled={hole === holes.length}
        endIcon={<NavigateNext />}
        onClick={() => changeHoles(hole + 1)}
        variant='contained'
      >
        Next
      </Button>
    </div>
  )
}

export default HoleSelectionButtons