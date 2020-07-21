import React from 'react'
import { Player } from '../../types'

const PlayerDetails: React.FC<{ player: Player }> = ({ player }) => {
  const { name } = player

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default PlayerDetails