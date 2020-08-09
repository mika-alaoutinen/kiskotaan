import React from 'react'
import { useParams } from 'react-router-dom'

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core'

import { ScoreCard } from '../../types'
import { useScoreCard } from '../../hooks/scoreCardHooks'

const ScoreTableBody: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const scoreCard: ScoreCard = useScoreCard(id)

  const renderRows = (): JSX.Element[] =>
    scoreCard.course.holes.map(hole =>
      <TableRow key={hole.number}>
        <TableCell>{hole.number}</TableCell>
        <TableCell>{hole.par}</TableCell>
        {renderScores()}
      </TableRow>
    )

  const renderScores = (): JSX.Element =>
    <TableCell>cell 1</TableCell>

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