import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CheckCircle from '@material-ui/icons/CheckCircle'
import Button from '@material-ui/core/Button'

import { endGame } from '../../store/game/gameActions'
import { homePath } from '../../constants'

const EndGameButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button
        color='secondary'
        component={Link}
        endIcon={<CheckCircle />}
        onClick={() => dispatch(endGame())}
        to={homePath}
        variant='contained'
      >
        End game
      </Button>
    </div>
  )
}

export default EndGameButton