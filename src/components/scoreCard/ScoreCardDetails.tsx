import React from 'react'

import ScoreCardRow from './ScoreCardRow'
import { ScoreCard } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardDetails: React.FC<{hole: number}> = ({ hole }) => {
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)

  const renderPlayers = () =>
    scoreCard.players.map(player =>
      <p key={player.id}>
        {player.name} 3
      </p>
    )
  
  // const rows = () =>
  //   scoreCard.players.map(player =>
  //     <ScoreCardRow row={} />
  //   )

  return (
    <div>
      
    </div>
  )
}

export default ScoreCardDetails