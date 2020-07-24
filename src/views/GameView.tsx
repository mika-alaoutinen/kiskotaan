import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import { Game, ScoreCard } from '../types'
import { getScoreCard } from '../store/scoreCard/scoreCardActions'
import { useSelector } from '../store/reduxTypes'

const GameView: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id } = useParams()

  const dispatch = useDispatch()

  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)
  
  // If score card is not in store, get it from backend:
  useEffect(() => {
    if (!scoreCard.id) {
      dispatch(getScoreCard(id))
    }
  }, [dispatch, game, scoreCard, id])

  return (
    <div>
      <ScoreCardDetails hole={game.hole} />
    </div>
  )
}

export default GameView