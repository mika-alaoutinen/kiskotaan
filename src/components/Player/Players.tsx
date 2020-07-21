import React from 'react'

import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

// import PlayerDetails from './PlayerDetails'
import { Player } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const Players: React.FC = () => {
  const players: Player[] = useSelector(state => state.players)
  const selectedPlayers: Player[] = useSelector(state => state.scoreCard.players)

  const renderAllPlayers = () =>
    players.map(player => createListItem(player, <Add />))

  const renderSelectedPlayers = () => selectedPlayers.length > 0
    ? selectedPlayers.map(player => createListItem(player, <Remove />))
    : <p>No selected players</p>

  const createListItem = (player: Player, icon: JSX.Element) =>
    <ListItem key={player.id} button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={player.name} />
    </ListItem>
  
  return (
    <div>
      <List subheader={
        <ListSubheader>Selected players</ListSubheader>
      }>
        {renderSelectedPlayers()}
      </List>

      <Divider />

      <List subheader={
        <ListSubheader>Players</ListSubheader>
      }>
        {renderAllPlayers()}
      </List>
    </div>
  )

  // const renderPlayers = () => players
  //   ? players.map(player =>
  //     <PlayerDetails key={player.id} player={player} />)
  //   : <p>no players</p>

  // return (
  //   <div>
  //     {renderPlayers()}
  //   </div>
  // )
}

export default Players