import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Player, ScoreCard } from '../../types'
import { usePlayerScores } from '../../hooks/hooks'
import { useSelector } from '../../store/reduxTypes'

const ScoreTable: React.FC = () => {
  // Score table summary
  // Score table body

  const playerScores: Map<string, number> = usePlayerScores()
  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
  const players: Player[] = scoreCard.players

  const renderPlayerScores = (): JSX.Element[] =>
    players.map(player =>
      <ListItem key={player.id}>
        <ListItemText primary={player.name} />
        <ListItemText primary={playerScores.get(player.id)} />
      </ListItem>
    )
  
  return (
    <div>
      <List>
        {renderPlayerScores()}
      </List>
    </div>
  )
}

export default ScoreTable