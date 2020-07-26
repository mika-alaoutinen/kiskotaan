import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Add from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import Remove from '@material-ui/icons/Remove'

import { substractScore, updateScores } from '../../store/scores/scoreActions'
import { Player, ScoreCard, ScoreRow } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const ScoreCardRow: React.FC<{ par: number, player: Player}> = ({ par, player }) => {
  const dispatch = useDispatch()
  const [ score, setScore ] = useState(par)
  
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
    dispatch(substractScore(player.id, hole, getScore() - 1))
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
        onClick={() => setScore(score + 1)}
      >
        <Add />
      </IconButton>

      {/* <Button onClick={() => dispatch(updateScores(hole))}>
        Save
      </Button> */}
    </div>
  )
}

export default ScoreCardRow