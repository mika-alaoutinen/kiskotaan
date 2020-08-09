import React from 'react'
import { useDispatch } from 'react-redux'
import Add from '@material-ui/icons/Add'
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'

import { addPlayerToCard } from '../../store/newScoreCard/newScoreCardActions'
import { Player } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const AllPlayers: React.FC = () => {
  const dispatch = useDispatch()
  const players: Player[] = useSelector(state => state.players)
  const selectedPlayers: Player[] = useSelector(state => state.newScoreCard.players)
  
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