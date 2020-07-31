import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import EndGameButton from '../components/game/EndGameButton'
import HoleSelectionButtons from '../components/game/HoleSelectionButtons'
import HoleSelector from '../components/game/HoleSelector'
import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import { ScoreCard } from '../types'
import { getScoreCard } from '../store/scoreCard/scoreCardActions'
import { useSelector } from '../store/reduxTypes'

const GameView: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useDispatch()
  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
  
  // If score card is not in store, get it from backend:
  useEffect(() => {
    if (!scoreCard.id) {
      dispatch(getScoreCard(id))
    }
  }, [dispatch, scoreCard, id])

  return (
    <div>
      <HoleSelector />
      <ScoreCardDetails />
      <HoleSelectionButtons />
      <EndGameButton />
    </div>
  )
}

export default GameView