export interface Course {
  id: string,
  name: string,
  holes: Hole[],
  par: number
}

export interface Game {
  id: string,
  hole: number, // The hole that is currently being played
  isOver: boolean,
  date?: Date
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

export interface ScoreCard {
  id: string,
  course: Course,
  players: Player[],
  rows: ScoreRow[]
}

export interface ScoreRow {
  hole: number,
  scores: Score[]
}

interface Score {
  playerId: string,
  score: number
}

export type NewCourse = Omit<Course, 'id'>
export type NewGame = Omit<Game, 'id'>
export type NewPlayer = Omit<Player, 'id'>
export type NewScoreCard = Pick<ScoreCard, 'course' | 'players'>