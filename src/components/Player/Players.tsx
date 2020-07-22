import React from 'react'

import Divider from '@material-ui/core/Divider'

import AddPlayer from './AddPlayer'
import AllPlayers from './AllPlayers'
import SelectedPlayers from './SelectedPlayers'

const Players: React.FC = () => {
  
  return (
    <div>
      <SelectedPlayers />
      <br /><Divider />
      
      <AllPlayers />
      <AddPlayer />
    </div>
  )
}

export default Players