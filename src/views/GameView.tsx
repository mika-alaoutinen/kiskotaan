import React from 'react'
import { useParams } from 'react-router-dom'

import EndGameButton from '../components/game/EndGameButton'
import HoleSelectionButtons from '../components/game/HoleSelectionButtons'
import HoleSelector from '../components/game/HoleSelector'
import RedirectButton from '../components/common/RedirectButton'
import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import ScoreTable from '../components/scoreTable/ScoreTable'

import { homePath } from '../constants'
import { Game, ScoreCard } from '../types'
import { useSelector } from '../store/reduxTypes'
import { useScoreCard } from '../hooks/scoreCardHooks'

const GameView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = useScoreCard(id)
  const { name, holes } = scoreCard.course

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