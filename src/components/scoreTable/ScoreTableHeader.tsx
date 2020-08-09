import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { usePlayerScores, usePlayerShotCount } from '../../hooks/playerHooks'
import { useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'
import { Game, ScoreCard, Player } from '../../types'

const ScoreTableHeader: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const playerScores: Map<string, number> = usePlayerScores()
  const shotCounts: Map<string, number> = usePlayerShotCount()

  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)
  const players: Player[] = scoreCard.players
  const { name, holes } = scoreCard.course

  const getScoreAndShots = (playerId: string) => {
    const score: string = playerScore(playerId)
    const shots: string = numberOfShots(playerId)
    return score + ' ' + shots
  }
  
  const playerScore = (playerId: string): string => {
    const score: number|undefined = playerScores.get(playerId)
    if (!score) {
      return '0'
    }
    return score > 0 ? `+${score}` : score.toString()
  }
  
  const numberOfShots = (playerId: string): string => {
    const score: number|undefined = shotCounts.get(playerId)
    return score ? `( ${score} )` : '( N/A )'
  }
  
  return (
    <div>
      <h2>Game summary</h2>
      <p>{name} {holes.length}, {game.date}</p>
      
      <List>
        {players.map(player => 
          <ListItem key={player.id}>
            <ListItemText primary={player.name} />
            <ListItemText primary={getScoreAndShots(player.id)} />
          </ListItem>
        )}
      </List>
    </div>
  )
}

export default ScoreTableHeader