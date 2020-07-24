import React from 'react'

import { ScoreCardRow } from '../../types'
// import { useSelector } from '../../store/reduxTypes'

const ScoreCardRow: React.FC<{ row: ScoreCardRow }> = ({ row }) => {
  // hole par
  // players

  const renderRow = () =>
    row.players.map(player =>
      <div key={player.id}>
        {player.name} - {row.hole.par} +
      </div>
    )
    
  return (
    <div>
      {renderRow()}
    </div>
  )
}

export default ScoreCardRow