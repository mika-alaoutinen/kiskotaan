import React from 'react'

import { ScoreCard } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardDetails: React.FC = () => {
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)
  
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