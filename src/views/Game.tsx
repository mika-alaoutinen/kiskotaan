import React from 'react'

import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import { ScoreCard } from '../types'
import { useSelector } from '../store/reduxTypes'

const Game: React.FC = () => {
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)
  
  return (
    <div>
      <ScoreCardDetails scoreCard={scoreCard} />
    </div>
  )
}

export default Game