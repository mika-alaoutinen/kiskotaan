import React from 'react'

import Divider from '@material-ui/core/Divider'

import AddPlayer from '../player/AddPlayer'
import AllPlayers from '../player/AllPlayers'
import SelectedPlayers from '../player/SelectedPlayers'

const PlayerSelect: React.FC = () => (
  <div>
    <SelectedPlayers />
    <br /><Divider />

    <AllPlayers />
    <AddPlayer />
  </div>
)

export default PlayerSelect