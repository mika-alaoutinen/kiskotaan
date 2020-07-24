import React from 'react'

import ScoreCardRow from './ScoreCardRow'
import { Hole, ScoreCard } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardDetails: React.FC = () => {
  const hole: number = useSelector(state => state.game.hole)
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)

  const getPar = (): number => {
    const holes: Hole[] = scoreCard.course.holes
    return holes.length > 1
      ? holes[hole - 1].par
      : 0
  }
  
  const renderScoreRows = (): JSX.Element[] =>
    scoreCard.players.map(player =>
      <ScoreCardRow
        key={player.id}
        par={getPar()}
        player={player}
      />
    )
  
  return (
    <div>
      <p>PAR {getPar()}</p>
      <div>{renderScoreRows()}</div>
    </div>
  )
}

export default ScoreCardDetails