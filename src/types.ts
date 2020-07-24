export interface Course {
  id: string,
  name: string,
  holes: Hole[],
  par: number
}

export interface Game {
  date?: Date,
  hole: number, // The hole that is currently being played
  isOver: boolean
  // scoreCard: ScoreCard // Put score card inside game?
}

export interface Hole {
  number: number,
  par: number,
  distance?: number
}

export interface Player {
  id: string,
  name: string
}

// export interface PlayerScore {
//   player: Player,
//   score: number
// }

export interface ScoreCard {
  id: string,
  course: Course,
  players: Player[],
  rows: ScoreCardRow[],
  date?: Date
}

export interface ScoreCardRow {
  hole: Hole,
  players: Player[]
  // scores: PlayerScore[]
}

export type NewCourse = Omit<Course, 'id'>
export type NewPlayer = Omit<Player, 'id'>
export type NewScoreCard = Pick<ScoreCard, 'course' | 'players'>