import React from 'react'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import Players from '../player/Players'
import { newPlayerPath } from '../../constants'

const PlayerSelect: React.FC = () => {

  const renderNewPlayerButton = () =>
    <Button
      color='secondary'
      component={Link}
      style={{ color: 'white' }}
      to={newPlayerPath}
      variant='contained'
    >
      Add new player
    </Button>
  
  return (
    <div>
      <Players />
      {renderNewPlayerButton()}
    </div>
  )
}

export default PlayerSelect