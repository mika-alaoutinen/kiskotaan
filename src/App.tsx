import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routes from './router/Routes'
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
      <Routes />
    </div>
  )
}

export default App
