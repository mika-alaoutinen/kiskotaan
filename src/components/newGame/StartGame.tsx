import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RedirectButton from '../common/RedirectButton'
import { endGame, startGame } from '../../store/game/gameActions'
import { deleteScoreCard } from '../../store/scoreCard/scoreCardActions'
import { gamePath, homePath } from '../../constants'
import { useSelector } from '../../store/reduxTypes'

const StartGame: React.FC = () => {
  const dispatch = useDispatch()
  const id: string = useSelector(state => state.scoreCard.id)

  useEffect(() => {
    dispatch(startGame())
  }, [dispatch])

  const cancelGame = (): void => {
    dispatch(endGame)
    dispatch(deleteScoreCard(id))
  }
  
  return (
    <div>
      <RedirectButton
        text='Cancel'
        to={homePath}
        color='secondary'
        clickHandler={cancelGame}
      />
      
      <RedirectButton
        text='Start game'
        to={gamePath + '/' + id}
      />
    </div>
  )
}

export default StartGame