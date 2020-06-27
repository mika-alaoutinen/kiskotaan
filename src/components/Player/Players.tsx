import React, { useEffect, useState } from 'react'
import PlayerDetails from './PlayerDetails'
import playerService from '../../services/playerService'
import { Player } from '../../types'

const Players: React.FC = () => {
  const [ players, setPlayers ] = useState<Player[]|void>()

  useEffect(() => {
    void playerService.getPlayers()
      .then(players => setPlayers(players))
  }, [setPlayers])

  const renderPlayers = () => players
    ? players.map(player =>
      <PlayerDetails key={player.id} player={player} />)
    : <p>no players</p>

  return (
    <div>
      <p>player listing</p>
      <div>{renderPlayers()}</div>
    </div>
  )
}

export default Players