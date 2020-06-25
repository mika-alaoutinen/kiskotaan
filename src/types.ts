// Course information
export interface Course {
  name: string,
  holes: Hole[],
  par: number
}

export interface Hole {
  par: number,
  length?: number
}

// Player's information
export interface Player {
  name: string,
  scoreCard: ScoreCard
}

export interface ScoreCard {
  holes: Hole[]
}