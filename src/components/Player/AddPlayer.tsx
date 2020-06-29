import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addPlayer } from '../../store/players/playerActions'
import { Player } from '../../types'

const AddPlayer: React.FC = () => {
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')

  const resetName = (): void => {
    setName('')
  }

  const submitHandler = () => (event: React.FormEvent<HTMLFormElement>) => {
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
    <div>
      <p>Add player</p>
      <form onSubmit={submitHandler()}>
        <input value={name} onChange={event => setName(event.target.value)} />
        <button type='submit'>Add player</button>
      </form>
    </div>
  )
}
 
export default AddPlayer