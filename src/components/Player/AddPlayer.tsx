import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Add from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'

import { addPlayer } from '../../store/players/playerActions'
import { NewPlayer } from '../../types'

const AddPlayer: React.FC = () => {
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')

  const resetName = (): void => setName('')

  const handleClick = (): void => {
    const player: NewPlayer = { name }
    dispatch(addPlayer(player))
    resetName()
  }
  
  return (
    <div>
      <TextField
        label='Add player'
        onChange={event => setName(event.target.value)}
        size='small'
        value={name}
        variant='outlined'
      />

      <IconButton color='secondary' onClick={() => handleClick()}>
        <Add />
      </IconButton>
    </div>
  )
}
 
export default AddPlayer