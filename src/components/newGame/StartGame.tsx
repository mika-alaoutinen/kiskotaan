import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RedirectButton from '../common/RedirectButton'
import { createNewScoreCard, deleteScoreCard } from '../../store/scoreCard/scoreCardActions'
import { gamePath, homePath } from '../../constants'
import { useSelector } from '../../store/reduxTypes'

const StartGame: React.FC = () => {
  const dispatch = useDispatch()
  const id: string = useSelector(state => state.scoreCard.id)

  useEffect(() => {
    dispatch(createNewScoreCard())
  }, [dispatch])

  return (
    <div>
      <RedirectButton
        text='Cancel'
        to={homePath}
        color='secondary'
        clickHandler={() => dispatch(deleteScoreCard(id))}
      />
      
      <RedirectButton
        text='Start game'
        to={gamePath + '/' + id}
      />
    </div>
  )
}

export default StartGame