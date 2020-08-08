import React from 'react'

import ScoreCardRow from './ScoreCardRow'
import { Hole } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardDetails: React.FC = () => {
  const { hole, scoreCard } = useSelector(state => state.game)
  
  const getPar = (): number => {
    const holes: Hole[] = scoreCard.course.holes
    return holes.length > 1
      ? holes[hole - 1].par
      : 0
  }
  
  const renderScoreRows = (): JSX.Element[] =>
    scoreCard.players.map(player =>
      <ScoreCardRow key={player.id} player={player} />
    )
  
  return (
    <div>
      <p>PAR {getPar()}</p>
      <div>{renderScoreRows()}</div>
    </div>
  )
}

export default ScoreCardDetails