import React, { useState } from 'react'

import Add from '@material-ui/icons/Add'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Remove from '@material-ui/icons/Remove'

import { Player } from '../../types'

const ScoreCardRow: React.FC<{ par: number, player: Player}> = ({ par, player }) => {
  const [ score, setScore ] = useState(par)

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
    </div>
  )
}

export default ScoreCardRow