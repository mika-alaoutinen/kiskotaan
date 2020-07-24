import React from 'react'

import { Player } from '../../types'

const ScoreCardRow: React.FC<{ par: number, player: Player}> = ({ par, player }) => {
    
  return (
    <p>
      {player.name} - {par} +
    </p>
  )
}

export default ScoreCardRow