import React from 'react'

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core'

import { ResultRow, useResultRows } from '../../hooks/scoreTableHooks'
import { useSelector } from '../../store/reduxTypes'
import { Player, Score } from '../../types'

const ScoreTableBody: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const resultRows: ResultRow[] = useResultRows(scoreCardId)
  const players: Player[] = useSelector(state => state.game.scoreCard.players)
  const playerNames: string[] = players.map(player => player.name)

  const renderRows = (): JSX.Element[] =>
    resultRows.map(row =>
      <TableRow key={row.hole}>
        <TableCell>{row.hole}</TableCell>
        <TableCell>{row.par}</TableCell>
        {renderScores(row.scores)}
      </TableRow>
    )
    
  const renderScores = (scores: Score[]): JSX.Element[] =>
    scores.map(score =>
      <TableCell key={score.playerId}>
        {score.score}
      </TableCell>
    )
  
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>PAR</TableCell>
            {playerNames.map(name =>
              <TableCell key={name}>{name}</TableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {renderRows()}
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default ScoreTableBody