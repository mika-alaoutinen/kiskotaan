import React from 'react'

import ScoreCardRow from './ScoreCardRow'
import { ScoreCard } from '../../types'
import { useParNumber, useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardDetails: React.FC = () => {
  const id: string = useSelector(state => state.game.scoreCardId)
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