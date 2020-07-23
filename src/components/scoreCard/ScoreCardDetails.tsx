import React from 'react'

import { ScoreCard } from '../../types'

const ScoreCardDetails: React.FC<{ scoreCard: ScoreCard }> = ({ scoreCard }) => {
  const renderPlayers = () =>
    scoreCard.players.map(player =>
      <p key={player.id}>
        {player.name} 3
      </p>
    )

  return (
    <div>
      {renderPlayers()}  
    </div>
  )
}

export default ScoreCardDetails