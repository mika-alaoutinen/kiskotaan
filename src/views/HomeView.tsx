import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Fab, Link } from '@material-ui/core'

import { newGamePath } from '../constants'

const HomeView: React.FC = () => (
  <div>
    <h2>Home page</h2>
    
    <Fab color='primary' size='large' variant='extended'>
      <Link component={RouterLink} to={newGamePath} style={{ color: 'white' }}>
        New game
      </Link>
    </Fab>
    
  </div>
)

export default HomeView