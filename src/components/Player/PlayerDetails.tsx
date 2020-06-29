import React from 'react'
import { Player } from '../../types'

const PlayerDetails: React.FC<{ player: Player }> = ({ player }) => {
  const { id, name } = player

  return (
    <div>
      <p>player id: {id}</p>
      <p>player name: {name}</p>
    </div>
  )
}

export default PlayerDetails