import React from 'react'

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core'

import { ResultRow, useResultRows } from '../../hooks/scoreTableHooks'

const ScoreTableBody: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const resultRows: ResultRow[] = useResultRows(scoreCardId)

  const renderRows = (): JSX.Element[] =>
    resultRows.map(row =>
      <TableRow key={row.hole}>
        <TableCell>{row.hole}</TableCell>
        <TableCell>{row.par}</TableCell>
        {renderScores(row)}
      </TableRow>
    )
  
  const renderScores = (row: ResultRow): JSX.Element[] =>
    row.scores.map(score =>
      <TableCell key={score}>
        {score}
      </TableCell>
    )
  
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>PAR</TableCell>

            <TableCell>Mika</TableCell>
            <TableCell>Salla</TableCell>
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