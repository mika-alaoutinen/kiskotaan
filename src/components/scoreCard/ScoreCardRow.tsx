import React, { useState } from 'react'

import Add from '@material-ui/icons/Add'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Remove from '@material-ui/icons/Remove'

import { Player, ScoreCard } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardRow: React.FC<{ par: number, player: Player}> = ({ par, player }) => {
  const hole: number = useSelector(state => state.game.hole)
  const scoreCard: ScoreCard = useSelector(state => state.scoreCard)

  const [ score, setScore ] = useState(par)

  const getScore = (): number => {
    const playerScore: number|undefined = scoreCard.rows
      .find(row => row.hole === hole)
      ?.scores.find(score => score.playerId === player.id)
      ?.score

    return playerScore ? playerScore : par
  }

  const chipColor = (): string => {
    const result = score - par
    if (result < 0) {
      return 'green'
    } else if (result === 0) {
      return 'blue'
    } else if (result === 1) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  return (
    <div>
      {player.name}

      <IconButton
        color='primary'
        disabled={score === 1}
        onClick={() => setScore(score - 1)}
      >
        <Remove />
      </IconButton>

      <Chip
        color='secondary'
        label={score}
        style={{ backgroundColor: chipColor() }}
      />

      <IconButton
        color='primary'
        onClick={() => setScore(score + 1)}
      >
        <Add />
      </IconButton>
      <button onClick={() => console.log(scoreCard)}>log</button>
    </div>
  )
}

export default ScoreCardRow