import { ScoreCard } from '../types'
import { useSelector } from '../store/reduxTypes'

export const usePlayerScores = (): Map<string, number> => {
  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
  const playerScores = new Map<string, number>()

  scoreCard.rows
    .flatMap(row => row.scores)    
    .forEach(score => {
      const currentScore: number|void = playerScores.get(score.playerId)
      const newScore: number = currentScore
        ? currentScore + score.score
        : score.score
      playerScores.set(score.playerId, newScore)
    })
  
  return playerScores
}

export const usePlayerScore = (playerId: string): number => {
  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)

  const playerScore: number = scoreCard.rows
    .flatMap(row => row.scores)
    .filter(score => score.playerId === playerId)
    .map(score => score.score)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return playerScore
}