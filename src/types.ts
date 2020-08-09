export interface Course {
  id: string,
  name: string,
  holes: Hole[],
  par: number
}

export interface Game {
  id: string,
  hasScoreChanged: boolean,
  hole: number,
  isOver: boolean,
  scoreCard: ScoreCard,
  date?: string
}

export interface Hole {
  number: number,
  par: number,
  distance?: number
}

export interface Player {
  id: string,
  name: string,
  scores: Score[]
}

export interface ScoreCard {
  id: string,
  course: Course,
  players: Player[]
}

export interface Score {
  hole: number,
  score: number
}

export type NewCourse = Omit<Course, 'id'>
export type NewGame = Omit<Game, 'id'>
export type NewPlayer = Pick<Player, 'name'>
export type NewScoreCard = Pick<ScoreCard, 'course' | 'players'>