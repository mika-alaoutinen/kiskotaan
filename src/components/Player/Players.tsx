import React from 'react'
import { useDispatch } from 'react-redux'

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
import { addPlayer, removePlayer } from '../../store/scoreCard/scoreCardActions'
import { useSelector } from '../../store/reduxTypes'

const Players: React.FC = () => {
  const dispatch = useDispatch()
  const players: Player[] = useSelector(state => state.players)
  const selectedPlayers: Player[] = useSelector(state => state.scoreCard.players)

  const renderAllPlayers = () => players
    .filter(player => !selectedPlayers.includes(player))
    .map(player => createListItem(player, <Add />, addPlayer))

  const renderSelectedPlayers = () => selectedPlayers.length > 0
    ? selectedPlayers.map(player => createListItem(player, <Remove />, removePlayer))
    : <p>No selected players</p>

  const createListItem = (player: Player, icon: JSX.Element, action: (player: Player) => void) =>
    <ListItem
      button
      key={player.id}
      onClick={() => dispatch(action(player))}
    >
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