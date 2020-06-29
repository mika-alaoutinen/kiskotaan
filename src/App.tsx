import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Players from './components/Player/Players'
import { getPlayers } from './store/players/playerActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])
  
  return (
    <div className="App">
      <h1>Kiskotaan</h1>
      <br />

      <Players />
    </div>
  )
}

export default App
