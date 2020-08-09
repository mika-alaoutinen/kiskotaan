import React from 'react'
import { useParams } from 'react-router-dom'

import EndGameButton from '../components/game/EndGameButton'
import HoleSelectionButtons from '../components/game/HoleSelectionButtons'
import HoleSelector from '../components/game/HoleSelector'
import RedirectButton from '../components/common/RedirectButton'
import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import ScoreTableBody from '../components/scoreTable/ScoreTableBody'
import ScoreTableHeader from '../components/scoreTable/ScoreTableHeader'

import { homePath } from '../constants'
import { Game } from '../types'
import { useSelector } from '../store/reduxTypes'

const GameView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const game: Game = useSelector(state => state.game)

  const renderGameView = (): JSX.Element =>
    <>
      <HoleSelector />
      <ScoreCardDetails />
      <HoleSelectionButtons />
      <EndGameButton />
    </>

  const renderGameOverView = (): JSX.Element =>
    <>
      <ScoreTableHeader scoreCardId={id} />
      <ScoreTableBody scoreCardId={id} />
      <RedirectButton text='To home page' to={homePath} />
    </>
  
  return game.isOver ? renderGameOverView() : renderGameView()
}

export default GameView