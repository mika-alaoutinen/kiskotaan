import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import Routes from '../../router/Routes'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  }),
)

const Navigation: React.FC = () => {
  const classes = useStyles()

  return (
    <div className='navigation'>
      <Routes />

      <AppBar className={classes.appBar} position='fixed'>
        <ButtonGroup variant='text'>
          <Button component={Link} to='/'>Home</Button>
          <Button component={Link} to='/new-game'>New game</Button>
          <Button component={Link} to='/history'>Game history</Button>
        </ButtonGroup>
      </AppBar>
    </div>
  )
}

export default Navigation