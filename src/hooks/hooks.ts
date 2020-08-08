import { ScoreCard } from '../types'
import { useSelector } from '../store/reduxTypes'

export const usePlayerScore = (): Map<string, number> => {
  const coursePar: number = useSelector(state => state.game.scoreCard.course.par)
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
  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
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
  
  return shotCounts
}