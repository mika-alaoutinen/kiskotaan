import React from 'react'
import { useParams } from 'react-router-dom'

import ScoreCardRow from './ScoreCardRow'
import { ScoreCard } from '../../types'
import { useParNumber } from '../../hooks/scoreCardHooks'
import { useScoreCard } from '../../hooks/scoreCardHooks'

const ScoreCardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const scoreCard: ScoreCard = useScoreCard(id)
  const par: number = useParNumber()
  
  const renderScoreRows = (): JSX.Element[] =>
    scoreCard.players.map(player =>
      <ScoreCardRow key={player.id} player={player} />
    )
  
  return (
    <div>
      <p>PAR {par}</p>
      <div>{renderScoreRows()}</div>
    </div>
  )
}

export default ScoreCardDetails