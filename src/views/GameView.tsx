import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import EndGameButton from '../components/game/EndGameButton'
import GameOverSummary from '../components/game/GameOverSummary'
import HoleSelectionButtons from '../components/game/HoleSelectionButtons'
import HoleSelector from '../components/game/HoleSelector'
import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import { Game, ScoreCard } from '../types'
import { getScoreCard } from '../store/scoreCard/scoreCardActions'
import { useSelector } from '../store/reduxTypes'

const GameView: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useDispatch()
  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = game.scoreCard
  
  // If score card is not in store, get it from backend:
  useEffect(() => {
    if (!scoreCard.id) {
      dispatch(getScoreCard(id))
    }
  }, [dispatch, scoreCard, id])

  const renderGameView = (): JSX.Element =>
    <>
      <HoleSelector />
      <ScoreCardDetails />
      <HoleSelectionButtons />
      <EndGameButton />
    </>

  const renderGameOverView = (): JSX.Element =>
    <GameOverSummary />
  
  return game.isOver ? renderGameOverView() : renderGameView()
}

export default GameView