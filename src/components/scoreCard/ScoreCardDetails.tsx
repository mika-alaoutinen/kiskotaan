import React from 'react'

import ScoreCardRow from './ScoreCardRow'
import { ScoreCard } from '../../types'
import { useParNumber } from '../../hooks/hooks'
import { useSelector } from '../../store/reduxTypes'


const ScoreCardDetails: React.FC = () => {
  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
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