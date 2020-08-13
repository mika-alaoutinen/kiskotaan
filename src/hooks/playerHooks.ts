import { ScoreCard, ScoreRow } from '../types'
import { useParNumber } from './scoreCardHooks'
import { useSelector } from '../store/reduxTypes'

export const usePlayerScore = (hole: number, playerId: string): number => {
  const scoreRows: ScoreRow[] = useSelector(state => state.scoreCard.rows)
  const par = useParNumber()

  const playerScore: number|undefined = scoreRows
    .find(row => row.hole === hole)
    ?.scores.find(score => score.playerId === playerId)
    ?.score

  return playerScore ? playerScore : par
}

export const usePlayerScores = (): Map<string, number> => {
  const coursePar: number = useSelector(state => state.scoreCard.course.par)
  const shotCounts: Map<string, number> = usePlayerShotCount()
  
  const playerScores = new Map<string, number>()
  
  for (const playerId of shotCounts.keys()) {
      const shots: number|undefined = shotCounts.get(playerId)
      const differenceToPar: number = shots ? shots - coursePar : 0
      playerScores.set(playerId, differenceToPar)
  }

  return playerScores
}

export const usePlayerShotCount = (): Map<string, number> => {
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)
  const shotCounts = new Map<string, number>()

  scoreCard.rows
    .flatMap(row => row.scores)
    .forEach(score => {
      const currentScore: number|void = shotCounts.get(score.playerId)
      const newScore: number = currentScore
        ? currentScore + score.score
        : score.score

      shotCounts.set(score.playerId, newScore)
    })
  
  return sortByShotCountAscending(shotCounts)
}

const sortByShotCountAscending = (shotCounts: Map<string, number>): Map<string, number> =>
  new Map([ ...shotCounts.entries() ]
    .sort((a, b) => a[1] - b[1])
  )