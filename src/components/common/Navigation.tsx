import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import Routes from '../../router/Routes'
import { gameHistoryPath, homePath, newGamePath } from '../../constants'

const appBarStyle = {
  top: 'auto',
  bottom: 0,
}

const centeredStyle = {
  margin: '0 auto',
}

const Navigation: React.FC = () => (
  <div className='navigation' >
    <Routes />

    <AppBar position='fixed' style={appBarStyle}>
      <ButtonGroup variant='text' style={centeredStyle}>
        <Button component={Link} to={homePath}>Home</Button>
        <Button component={Link} to={newGamePath}>New game</Button>
        <Button component={Link} to={gameHistoryPath}>Game history</Button>
      </ButtonGroup>
    </AppBar>
  </div>
)

export default Navigation