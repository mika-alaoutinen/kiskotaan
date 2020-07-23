import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import ScoreCardDetails from '../components/scoreCard/ScoreCardDetails'
import { ScoreCard } from '../types'
import { getScoreCard } from '../store/scoreCard/scoreCardActions'
import { useSelector } from '../store/reduxTypes'

const Game: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id } = useParams()

  const dispatch = useDispatch()
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)

  // If score card is not in store, get it from backend:
  useEffect(() => {
    if (!scoreCard.id) {
      dispatch(getScoreCard(id))
    }
  }, [dispatch, scoreCard, id])

  // if (!scoreCard) {
  //   return null
  // }

  return (
    <div>
      <ScoreCardDetails scoreCard={scoreCard} />
    </div>
  )
}

export default Game