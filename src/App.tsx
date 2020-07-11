import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import Navigation from './components/common/Navigation'
import { getPlayers } from './store/players/playerActions'

const style = {
  fontFamily: 'Roboto'
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])

  return (
    <Grid
      alignItems='center'
      className='App'
      container
      direction='column'
      justify='center'
      style={style}
      spacing={0}
    >
      
      <h1>Kiskotaan</h1>
      <Navigation />
      
    </Grid>
  )
}

export default App