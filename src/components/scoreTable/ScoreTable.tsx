import React from 'react'

import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Player, ScoreCard } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreTable: React.FC = () => {
  // Score table summary
  // Score table body
  // useScoreTally

  const scoreCard: ScoreCard = useSelector(state => state.game.scoreCard)
  const players: Player[] = scoreCard.players
  const { name, holes } = scoreCard.course

  const calculateTotalScore = (): number => {

    
    return 10
  }

  const renderPlayerScores = (): JSX.Element[] =>
    players.map(player =>
      <ListItem key={player.id}>
        <ListItemText primary={player.name} />
        <ListItemText primary={calculateTotalScore()} />
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