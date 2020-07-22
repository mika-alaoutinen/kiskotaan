export interface Course {
  id: string,
  name: string,
  holes: Hole[],
  par: number
}

export interface Player {
  id: string,
  name: string
}

export interface ScoreCard {
  id: string,
  date?: Date,
  course: Course,
  players: Player[],
  rows: ScoreCardRow[]
}

export interface ScoreCardRow {
  scoreCardId: string,
  holeNumber: number,
  scores: PlayerScore[]
}

export type NewCourse = Omit<Course, 'id'>
export type NewPlayer = Omit<Player, 'id'>
export type NewScoreCard = Omit<ScoreCard, 'id'>

// Private interfaces
interface Hole {
  number: number,
  par: number,
  distance?: number
}

interface PlayerScore {
  playerId: string,
  score: number
}