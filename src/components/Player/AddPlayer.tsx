import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { addPlayer } from '../../store/players/playerActions'
import { Player } from '../../types'

const AddPlayer: React.FC = () => {
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')

  const resetName = (): void => setName('')

  const submitHandler = () => (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const player: Player = {
      id: 'temp',
      name,
      scoreCard: {
        holes: [
          { number: 1, par: 3 }
        ],
      },
    }

    dispatch(addPlayer(player))
    resetName()
  }
  
  return (
    <div className='add-player-form'>
      <h2>Add player</h2>

      <form onSubmit={submitHandler()}>
        
        <TextField
          label='Add player'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <p>
          <Button
            type='submit'
            variant='contained'
          >
            Submit players
          </Button>
        </p>

      </form>
    </div>
  )
}
 
export default AddPlayer