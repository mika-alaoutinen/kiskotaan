import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AddPlayer from './components/player/AddPlayer'
import Players from './components/player/Players'
import { getPlayers } from './store/players/playerActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])

  return (
    <div
      className="App"
      style={{ fontFamily: 'Roboto' }}
    >
      <h1>Kiskotaan</h1>
      <br />

      <Players />

      <br />
      <AddPlayer />
    </div>
  )
}

export default App
