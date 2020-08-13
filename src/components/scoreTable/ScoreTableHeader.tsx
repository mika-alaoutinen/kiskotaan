import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'
import { Game, ScoreCard } from '../../types'
import { PlayerScore, usePlayerScores } from '../../hooks/playerHooks'

const ScoreTableHeader: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const playerScores: PlayerScore[] = usePlayerScores()

  const game: Game = useSelector(state => state.game)
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)
  const { name, holes } = scoreCard.course

  const formatScoreText = (score: PlayerScore) =>
    `${score.score} (${score.shots})`

  return (
    <div>
      <h2>Game summary</h2>
      <p>{name} {holes.length}, {game.date}</p>
      
      <List>
        {playerScores.map(score =>
          <ListItem key={score.id}>
            <ListItemText primary={score.name} />
            <ListItemText primary={formatScoreText(score)} />
          </ListItem>
        )}
      </List>
    </div>
  )
}

export default ScoreTableHeader