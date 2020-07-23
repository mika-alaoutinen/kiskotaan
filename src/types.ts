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
  course: Course,
  players: Player[],
  rows: ScoreCardRow[],
  date?: Date
}

export interface ScoreCardRow {
  hole: Hole,
  scores: PlayerScore[]
}

export type NewCourse = Omit<Course, 'id'>
export type NewPlayer = Omit<Player, 'id'>
export type NewScoreCard = Pick<ScoreCard, 'course' | 'players'>

// Private interfaces
interface Hole {
  number: number,
  par: number,
  distance?: number
}

interface PlayerScore {
  player: Player,
  score: number
}