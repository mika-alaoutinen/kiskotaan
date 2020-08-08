import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Player, ScoreCard } from '../../types'
import { usePlayerScores, usePlayerShotCount } from '../../hooks/playerHooks'
import { useSelector } from '../../store/reduxTypes'

const ScoreTable: React.FC = () => {
  // Score table summary
  // Score table body

  const playerScores: Map<string, number> = usePlayerScores()
  const shotCounts: Map<string, number> = usePlayerShotCount()

  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
  const players: Player[] = scoreCard.players

  const renderPlayerScores = (): JSX.Element[] =>
    players.map(player =>
      <ListItem key={player.id}>
        <ListItemText primary={player.name} />
        <ListItemText primary={getScoreAndShots(player.id)} />
      </ListItem>
    )
  
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
      <List>
        {renderPlayerScores()}
      </List>
    </div>
  )
}

export default ScoreTable