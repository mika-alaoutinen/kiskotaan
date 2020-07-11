import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import Routes from '../../router/Routes'

const Navigation: React.FC = () => (
  <div className='navigation'>
    <Routes />

    <ButtonGroup variant='text'>
      <Button component={Link} to='/'>Home</Button>
      <Button component={Link} to='/new-game'>New game</Button>
      <Button component={Link} to='/history'>Game history</Button>
    </ButtonGroup>
  </div>
)

export default Navigation