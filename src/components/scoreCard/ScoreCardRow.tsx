import React from 'react'
import { useDispatch } from 'react-redux'

import Add from '@material-ui/icons/Add'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Remove from '@material-ui/icons/Remove'

import { addScore, substractScore } from '../../store/scores/scoreActions'
import { Player } from '../../types'
import { useParNumber, usePlayerScore } from '../../hooks/hooks'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardRow: React.FC<{ player: Player}> = ({ player }) => {
  const dispatch = useDispatch()
  const hole: number = useSelector(state => state.game.hole)
  const par: number = useParNumber()
  const score: number = usePlayerScore(hole, player.id)

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
        onClick={() => dispatch(substractScore(player.id, hole))}
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
        onClick={() => dispatch(addScore(player.id, hole))}
      >
        <Add />
      </IconButton>
    </div>
  )
}

export default ScoreCardRow