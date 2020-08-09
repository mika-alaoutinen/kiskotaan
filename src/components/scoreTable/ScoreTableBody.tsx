import React from 'react'

import { Player, ScoreCard } from '../../types'
import { usePlayerScores, usePlayerShotCount } from '../../hooks/playerHooks'
import { useSelector } from '../../store/reduxTypes'

const ScoreTableBody: React.FC = () => {
  const playerScores: Map<string, number> = usePlayerScores()
  const shotCounts: Map<string, number> = usePlayerShotCount()

  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
  const players: Player[] = scoreCard.players

  const renderScoreTables = (): JSX.Element => {
    return <div>
      1 2 3 4 5 6 7 8 9
    </div>
  }
  
  return (
    <div>
      {renderScoreTables()}
    </div>
  )
}

export default ScoreTableBody