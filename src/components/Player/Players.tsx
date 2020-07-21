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

import PlayerDetails from './PlayerDetails'
import { Player } from '../../types'
import { addPlayer, removePlayer } from '../../store/scoreCard/scoreCardActions'
import { useSelector } from '../../store/reduxTypes'

const Players: React.FC = () => {
  const dispatch = useDispatch()
  const players: Player[] = useSelector(state => state.players)
  const selectedPlayers: Player[] = useSelector(state => state.scoreCard.players)

  const renderSelectedPlayers = () => selectedPlayers.length > 0
    ? selectedPlayers.map(createSelectedPlayersList)
    : <p>No selected players</p>
  
  const createSelectedPlayersList = (player: Player) =>
    <ListItem
      button
      key={player.id}
      onClick={() => dispatch(removePlayer(player))}
    >
      <ListItemIcon><Remove /></ListItemIcon>
      <PlayerDetails player={player} />
    </ListItem>

  const renderAllPlayers = () => {
    const nonSelectedPlayers: Player[] = players.filter(player => !selectedPlayers.includes(player))
    return nonSelectedPlayers.length > 0
      ? nonSelectedPlayers.map(createAllPlayersList)
      : <p>All players selected</p>
  }

  const createAllPlayersList = (player: Player) =>
    <ListItem
      button
      key={player.id}
      onClick={() => dispatch(addPlayer(player))}
    >
      <ListItemIcon><Add /></ListItemIcon>
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
}

export default Players