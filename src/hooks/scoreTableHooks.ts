import { ScoreCard, ScoreRow } from '../types'
import { useScoreCard } from './scoreCardHooks'

export interface ResultRow {
  hole: number,
  par: number,
  scores: number[]
}

export const useResultRows = (scoreCardId: string): ResultRow[] => {
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)

  return scoreCard.course.holes.map(hole => {
    const scoreRow: ScoreRow|undefined = scoreCard.rows.find(row => row.hole === hole.number)

    return {
      hole: hole.number,
      par: hole.par,
      scores: scoreRow ? scoreRow.scores.map(score => score.score) : []
    }
  })
}