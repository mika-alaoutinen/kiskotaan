import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Hole, ScoreCard } from '../types'
import { getScoreCard } from '../store/scoreCard/scoreCardActions'
import { useSelector } from '../store/reduxTypes'

export const useParNumber = (): number => {
  const hole = useSelector(state => state.game.hole)
  const holes: Hole[] = useSelector(state => state.scoreCard.course.holes)  
  
  return holes.length > 1 
    ? holes[hole - 1].par
    : 0
}

export const useScoreCard = (scoreCardId: string): ScoreCard => {
  const dispatch = useDispatch()
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)

  useEffect(() => {
    if (!scoreCard.id) {
      dispatch(getScoreCard(scoreCardId))
    }
  }, [dispatch, scoreCard, scoreCardId])

  return scoreCard
}