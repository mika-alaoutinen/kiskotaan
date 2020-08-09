import { Player } from '../types'
import { useSelector } from '../store/reduxTypes'

export const usePlayerScore = (hole: number, playerId: string): number => {
  const players: Player[] = useSelector(state => state.game.scoreCard.players)
  const player: Player|undefined = players.find(p => p.id === playerId)

  if (!player) {
    return 0
  }
  
  const score: number|undefined = player.scores
    .find(score => score.hole === hole)
    ?.score

  return score ? score : 0
}

export const usePlayerScores = (): Map<string, number> => {
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
  const players: Player[] = useSelector(state => state.game.scoreCard.players)
  const shotCounts = new Map<string, number>()
  
  for (const player of players) {
    const shotCount: number = player.scores
      .map(score => score.score)
      .reduce((sum, score) => sum + score, 0)
    
    shotCounts.set(player.id, shotCount)
  }
  
  return shotCounts
}