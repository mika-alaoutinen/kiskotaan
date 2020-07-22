import React from 'react'
import { useDispatch } from 'react-redux'

import Add from '@material-ui/icons/Add'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

import { addPlayerToCard } from '../../store/scoreCard/scoreCardActions'
import { Player } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const AllPlayers: React.FC = () => {
  const dispatch = useDispatch()
  const players: Player[] = useSelector(state => state.players)
  const selectedPlayers: Player[] = useSelector(state => state.scoreCard.players)
  
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
      onClick={() => dispatch(addPlayerToCard(player))}
    >
      <ListItemIcon><Add /></ListItemIcon>
      <ListItemText primary={player.name} />
    </ListItem>
  
  return (
    <List subheader={
      <ListSubheader>Players</ListSubheader>
    }>
      {renderAllPlayers()}
    </List>
  )
}

export default AllPlayers