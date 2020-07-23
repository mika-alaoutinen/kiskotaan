import React from 'react'
import { useHistory } from 'react-router-dom'

import { gamePath } from '../../constants'
import { useSelector } from '../../store/reduxTypes'

const GameLoading: React.FC = () => {
  const history = useHistory()
  const scoreCardId: string = useSelector(state => state.scoreCard.id)

  if (!scoreCardId) {
    return <div>Loading, please wait...</div>
  }

  const startGame = () => {
    history.push(`${gamePath}/${scoreCardId}`)
  }

  startGame()
  return <></>
}

export default GameLoading