import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Navigation from './components/common/Navigation'
import { getPlayers } from './store/players/playerActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayers())
  }, [dispatch])

  return (
    <div className="App" style={{ fontFamily: 'Roboto' }}>
      <h1>Kiskotaan</h1>
      <Navigation />
    </div>
  )
}

export default App