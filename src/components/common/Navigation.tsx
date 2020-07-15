import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import Routes from '../../router/Routes'
import { gameHistoryPath, homePath, newCoursePath, newGamePath } from '../../constants'

const appBarStyle = {
  top: 'auto',
  bottom: 0,
}

const buttonStyle = {
  color: 'white'
}

const Navigation: React.FC = () => (
  <div className='navigation' >
    <Routes />

    <AppBar position='fixed' style={appBarStyle}>
      <ButtonGroup variant='text' style={{ margin: '0 auto' }}>

        <Button component={Link} to={homePath} style={buttonStyle}>
          Home
        </Button>

        <Button component={Link} to={newGamePath} style={buttonStyle}>
          New game
        </Button>
        
        <Button component={Link} to={newCoursePath} style={buttonStyle}>
          New course
        </Button>
        
        <Button component={Link} to={gameHistoryPath} style={buttonStyle}>
          Game history
        </Button>
        
      </ButtonGroup>
    </AppBar>
  </div>
)

export default Navigation