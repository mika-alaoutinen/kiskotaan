import React from 'react'
import { useDispatch } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListSubheader from '@material-ui/core/ListSubheader'
import Remove from '@material-ui/icons/Remove'

import PlayerDetails from './PlayerDetails'
import { Player } from '../../types'
import { removePlayerFromCard } from '../../store/scoreCard/newScoreCardActions'
import { useSelector } from '../../store/reduxTypes'

const SelectedPlayers: React.FC = () => {
  const dispatch = useDispatch()
  const selectedPlayers: Player[] = useSelector(state => state.newScoreCard.players)

  const renderSelectedPlayers = () => selectedPlayers.length > 0
    ? selectedPlayers.map(createSelectedPlayersList)
    : <p>No selected players</p>

  const createSelectedPlayersList = (player: Player) =>
    <ListItem
      button
      key={player.id}
      onClick={() => dispatch(removePlayerFromCard(player))}
    >
      <ListItemIcon><Remove /></ListItemIcon>
      <PlayerDetails player={player} />
    </ListItem>

  return (
    <List subheader={
      <ListSubheader>Selected players</ListSubheader>
    }>
      {renderSelectedPlayers()}
    </List>
  )
}

export default SelectedPlayers