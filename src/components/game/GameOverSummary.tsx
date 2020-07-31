import React from 'react'

import RedirectButton from '../common/RedirectButton'
import { homePath } from '../../constants'

const GameOverSummary: React.FC = () => {
  return (
    <div>
      game over
      <RedirectButton text='To home page' to={homePath} />
    </div>
  )
}

export default GameOverSummary