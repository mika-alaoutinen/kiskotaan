import React from 'react'

import PlayerDetails from './PlayerDetails'
import { Player } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const Players: React.FC = () => {
  const players: Player[] = useSelector(state => state.players)

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