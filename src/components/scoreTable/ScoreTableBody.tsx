import React from 'react'

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core'

import { ResultRow, useResultRows } from '../../hooks/scoreTableHooks'
import { useScoreCard } from '../../hooks/scoreCardHooks'
import { useSelector } from '../../store/reduxTypes'
import { Score, ScoreCard } from '../../types'

const ScoreTableBody: React.FC<{ scoreCardId: string }> = ({ scoreCardId }) => {
  const id: string = useSelector(state => state.game.scoreCardId)
  const resultRows: ResultRow[] = useResultRows(scoreCardId)
  const scoreCard: ScoreCard = useScoreCard(id)
  const playerNames: string[] = scoreCard.players.map(player => player.name)

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