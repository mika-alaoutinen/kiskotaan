import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const Navigation: React.FC = () => (
  <ButtonGroup variant='text'>
    <Button component={Link} to='/'>Home</Button>
    <Button component={Link} to='/new-game'>New game</Button>
  </ButtonGroup>
)

export default Navigation