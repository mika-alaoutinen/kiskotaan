import React from 'react'

import CheckCircle from '@material-ui/icons/CheckCircle'
import Button from '@material-ui/core/Button'

const EndGameButton: React.FC = () => {

  const endGame = (): void => {
    console.log('end game')
  }

  return (
    <div>
      <Button
        color='secondary'
        endIcon={<CheckCircle />}
        onClick={endGame}
        variant='contained'
      >
        End game
      </Button>
    </div>
  )
}

export default EndGameButton