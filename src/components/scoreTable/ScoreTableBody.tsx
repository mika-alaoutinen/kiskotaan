import React from 'react'

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core'

import { ScoreCard, ScoreRow } from '../../types'
import { useScoreCard } from '../../hooks/scoreCardHooks'

interface ResultRow {
  hole: number,
  par: number,
  scores: number[]
}

const ScoreTableBody: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)

  const resultRows: ResultRow[] = []

  for (const hole of scoreCard.course.holes) {
    const scoreRow: ScoreRow|undefined = scoreCard.rows.find(row => row.hole === hole.number)

    const resultRow: ResultRow = {
      hole: hole.number,
      par: hole.par,
      scores: scoreRow ? scoreRow.scores.map(score => score.score) : []
    }

    resultRows.push(resultRow)
  }

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