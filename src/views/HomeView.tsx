import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Fab from '@material-ui/core/Fab'
import Link from '@material-ui/core/Link'

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