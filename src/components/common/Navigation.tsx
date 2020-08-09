import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, ButtonGroup } from '@material-ui/core'

import Routes from '../../router/Routes'
import { gameHistoryPath, homePath, newCoursePath, newGamePath, newPlayerPath } from '../../constants'

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
        
        <Button component={Link} to={newPlayerPath} style={buttonStyle}>
          New player
        </Button>
        
        <Button component={Link} to={gameHistoryPath} style={buttonStyle}>
          Game history
        </Button>
        
      </ButtonGroup>
    </AppBar>
  </div>
)

export default Navigation