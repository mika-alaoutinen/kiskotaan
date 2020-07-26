import React from 'react'
import { useDispatch } from 'react-redux'

import Add from '@material-ui/icons/Add'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Remove from '@material-ui/icons/Remove'

import { addScore, substractScore, updateScores } from '../../store/scores/scoreActions'
import { Player, ScoreRow } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardRow: React.FC<{ par: number, player: Player}> = ({ par, player }) => {
  const dispatch = useDispatch()
  
  const hole: number = useSelector(state => state.game.hole)
  const scoreRows: ScoreRow[] = useSelector(state => state.scoreCard.rows)

  const getScore = (): number => {
    const playerScore: number|undefined = scoreRows
      .find(row => row.hole === hole)
      ?.scores.find(score => score.playerId === player.id)
      ?.score

    return playerScore ? playerScore : par
  }

  const minusHandler = (): void => {
    dispatch(substractScore(player.id, hole))
    dispatch(updateScores(hole))
  }
  
  const plusHandler = (): void => {
    dispatch(addScore(player.id, hole))
    dispatch(updateScores(hole))
  }

  const chipColor = (): string => {
    const result = getScore() - par
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
        onClick={minusHandler}
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
        onClick={plusHandler}
      >
        <Add />
      </IconButton>
    </div>
  )
}

export default ScoreCardRow