import React from 'react'
import { useDispatch } from 'react-redux'

import Add from '@material-ui/icons/Add'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Remove from '@material-ui/icons/Remove'

import { addScore, substractScore } from '../../store/scores/scoreActions'
import { Hole, Player, ScoreRow } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardRow: React.FC<{ player: Player}> = ({ player }) => {
  const dispatch = useDispatch()
  
  const { hole, scoreCard } = useSelector(state => state.game)
  const scoreRows: ScoreRow[] = scoreCard.rows

  const getPar = (): number => {
    const holes: Hole[] = scoreCard.course.holes
    return holes.length > 1 
      ? holes[hole - 1].par
      : 0
  }
  
  const getScore = (): number => {
    const playerScore: number|undefined = scoreRows
      .find(row => row.hole === hole)
      ?.scores.find(score => score.playerId === player.id)
      ?.score

    return playerScore ? playerScore : getPar()
  }

  const chipColor = (): string => {
    const result = getScore() - getPar()
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
        disabled={getScore() === 1}
        onClick={() => dispatch(substractScore(player.id, hole))}
      >
        <Remove />
      </IconButton>

      <Chip
        color='secondary'
        label={getScore()}
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