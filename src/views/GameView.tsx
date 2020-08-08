import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import EndGameButton from '../components/game/EndGameButton'
import HoleSelectionButtons from '../components/game/HoleSelectionButtons'
import HoleSelector from '../components/game/HoleSelector'
import RedirectButton from '../components/common/RedirectButton'
import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import ScoreTable from '../components/scoreTable/ScoreTable'
import { homePath } from '../constants'
import { getScoreCard } from '../store/scoreCard/scoreCardActions'
import { Game, ScoreCard } from '../types'
import { useSelector } from '../store/reduxTypes'

const GameView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  
  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = game.scoreCard
  const { name, holes } = scoreCard.course
  
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
    <>
      {renderGameOverHeading()}
      <ScoreTable />
      <RedirectButton text='To home page' to={homePath} />
    </>
  
  const renderGameOverHeading = (): JSX.Element =>
    <>
      <h2>Game summary</h2>
      <p>{name} {holes.length}, {game.date}</p>
    </>
  
  return game.isOver ? renderGameOverView() : renderGameView()
}

export default GameView