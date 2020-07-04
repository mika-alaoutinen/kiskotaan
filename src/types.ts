export interface Course {
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
  holes: Hole[],
  par: number,
  players: Player[],
  rows: ScoreCardRow[]
}

export interface ScoreCardRow {
  scoreCardId: string,
  holeNumber: number,
  scores: PlayerScore[]
}

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