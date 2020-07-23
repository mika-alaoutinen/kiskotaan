import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createNewScoreCard } from '../../store/scoreCard/scoreCardActions'

import Button from '@material-ui/core/Button'

import RedirectButton from '../common/RedirectButton'
import { gamePath } from '../../constants'
import { useSelector } from '../../store/reduxTypes'

const StartGame: React.FC = () => {
  const dispatch = useDispatch()
  const id: string = useSelector(state => state.scoreCard.id)
  const path = gamePath + '/' + id

  useEffect(() => {
    dispatch(createNewScoreCard())
  }, [dispatch])

  const cancel = (): void => {
    console.log('Cancel starting a game. TODO: delete created score card from backend?')
  }

  return (
    <div>
      <Button onClick={cancel} variant='outlined'>
        Cancel
      </Button>
      
      <RedirectButton text='Start game' to={path} />
    </div>
  )
}

export default StartGame