// Course information
export interface Course {
  name: string,
  holes: Hole[],
  par: number
}

export interface Hole {
  number: number,
  par: number,
  length?: number
}

// Player's information
export interface Player {
  id: string,
  name: string,
  scoreCard: ScoreCard
}

export interface ScoreCard {
  holes: Hole[]
}