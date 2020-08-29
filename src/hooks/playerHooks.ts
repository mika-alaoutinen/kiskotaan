import { Course, Score, ScoreCard, ScoreRow } from '../types'
import { calculatePar } from '../components/course/courseUtils'
import { useParNumber } from './scoreCardHooks'
import { useSelector } from '../store/reduxTypes'

export interface PlayerScore {
  id: string,
  name: string,
  score: number,
  shots: number
}

interface PlayerShotCount {
  id: string,
  name: string,
  shots: number
}

export const usePlayerScore = (hole: number, playerId: string): number => {
  const scoreRows: ScoreRow[] = useSelector(state => state.scoreCard.rows)
  const par = useParNumber()

  const playerScore: number|undefined = scoreRows
    .find(row => row.hole === hole)
    ?.scores.find(score => score.playerId === playerId)
    ?.score

  return playerScore ? playerScore : par
}

export const usePlayerScores = (): PlayerScore[] => {
  const course: Course = useSelector(state => state.scoreCard.course)
  const par: number = calculatePar(course)
  const shotCounts: PlayerShotCount[] = usePlayerShotCount()

  return shotCounts.map(shotCount => {
    const { id, name, shots } = shotCount
    return {
      id,
      name,
      score: shots - par,
      shots,
    }
  })
}

const usePlayerShotCount = (): PlayerShotCount[] => {
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)
  const scores: Score[] = scoreCard.rows.flatMap(row => row.scores)
  const shotCounts = countShotsToMap(scores)
  
  const playerShotCounts: PlayerShotCount[] = []
  shotCounts.forEach((score, id) => {
    const name: string|undefined = scoreCard.players.find(player => player.id === id)?.name
    playerShotCounts.push({
      id,
      name: name ? name : id,
      shots: score
    })
  })

  return playerShotCounts
}

const countShotsToMap = (scores: Score[]): Map<string, number> => {
  const shotCounts = new Map<string, number>()

  scores.forEach(score => {
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