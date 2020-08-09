import React from 'react'

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core'

import { ScoreCard } from '../../types'
import { useScoreCard } from '../../hooks/scoreCardHooks'

const ScoreTableBody: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const scoreCard: ScoreCard = useScoreCard(scoreCardId)

  const renderRows = (): JSX.Element[] =>
    scoreCard.course.holes.map(hole =>
      <TableRow key={hole.number}>
        <TableCell>{hole.number}</TableCell>
        <TableCell>{hole.par}</TableCell>
        {renderScores()}
      </TableRow>
    )

  const renderScores = (): JSX.Element[] =>
    scoreCard.rows.flatMap(row =>
      row.scores.map(score =>
        <TableCell key={score.playerId}>{score.score}</TableCell>
      )
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