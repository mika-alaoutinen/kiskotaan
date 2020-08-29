import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { calculatePar } from '../course/courseUtils'
import { useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'
import { ScoreCard } from '../../types'
import { PlayerScore, usePlayerScores } from '../../hooks/playerHooks'

const ScoreTableHeader: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const date: string|undefined = useSelector(state => state.game.date)
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)
  const { name, holes } = scoreCard.course
  const par: number = calculatePar(scoreCard.course)
  const playerScores: PlayerScore[] = usePlayerScores()

  const renderDate = (): string =>
    date ? `, ${date}` : ''
  
  const formatScoreText = (score: PlayerScore) =>
    `${score.score} (${score.shots})`

  return (
    <div>
      <h2>Game summary</h2>
      <p>{name} {holes.length}, par {par} {renderDate()}</p>
      
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