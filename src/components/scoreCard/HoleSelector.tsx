import React from 'react'

import { useSelector } from '../../store/reduxTypes'

const HoleSelector: React.FC = () => {
  const hole: number = useSelector(state => state.game.hole)
  
  return (
    <div>
      Hole {hole}
    </div>
  )
}

export default HoleSelector