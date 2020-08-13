import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'
import { Game, ScoreCard, Player } from '../../types'

import {
  PlayerScore, PlayerShotCount, usePlayerScores, usePlayerShotCount
} from '../../hooks/playerHooks'

const ScoreTableHeader: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const playerScores: PlayerScore[] = usePlayerScores()
  const shotCounts: PlayerShotCount[] = usePlayerShotCount()

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
    const score: number|undefined = playerScores.find(score => score.id === playerId)?.score
    if (!score) {
      return '0'
    }
    return score > 0 ? `+${score}` : score.toString()
  }
  
  const numberOfShots = (playerId: string): string => {
    const score: number|undefined = shotCounts.find(shots => shots.id === playerId)?.shots
    return score ? `( ${score} )` : '( N/A )'
  }

  const renderListItems = (): JSX.Element[] => {
    const playerIds: string[] = playerScores.map(score => score.id)

    return playerIds.map(id => {
      const name: string|undefined = players.find(player => player.id === id)?.name

      return (
        <ListItem key={id}>
          <ListItemText primary={name ? name : id} />
          <ListItemText primary={getScoreAndShots(id)} />
        </ListItem>
      )
    })
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