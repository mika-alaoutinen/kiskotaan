import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'
import { Game, ScoreCard } from '../../types'

import {
  PlayerScore, PlayerShotCount, usePlayerScores, usePlayerShotCount
} from '../../hooks/playerHooks'

const ScoreTableHeader: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const playerScores: PlayerScore[] = usePlayerScores()
  const shotCounts: PlayerShotCount[] = usePlayerShotCount()

  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)
  const { name, holes } = scoreCard.course

  const numberOfShots = (playerId: string): string => {
    const score: number|undefined = shotCounts.find(shots => shots.id === playerId)?.shots
    return score ? `( ${score} )` : '( N/A )'
  }

  const renderListItems = (): JSX.Element[] => {
    return playerScores.map(score =>
      <ListItem key={score.id}>
        <ListItemText primary={score.name} />
        <ListItemText primary={`${score.score} ${numberOfShots(score.id)}`} />
      </ListItem>
    )
  }

  return (
    <div>
      <h2>Game summary</h2>
      <p>{name} {holes.length}, {game.date}</p>
      
      <List>
        {renderListItems()}
      </List>
    </div>
  )
}

export default ScoreTableHeader