import React from 'react'
import { useDispatch } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import { Hole } from '../../types'
import { switchHole } from '../../store/game/gameActions'
import { useSelector } from '../../store/reduxTypes'

const HoleSelector: React.FC = () => {
  const dispatch = useDispatch()
  const holes: Hole[] = useSelector(state => state.scoreCard.course.holes)
  const hole: number = useSelector(state => state.game.hole)
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    const newHole: number = event.target.value as number
    dispatch(switchHole(newHole))
  }

  const renderHoleSelect = (): JSX.Element =>
    <Select onChange={handleChange} value={hole}>
      {renderMenuItems()}
    </Select>
  
  const renderMenuItems = (): JSX.Element[] =>
    holes.map(hole =>
      <MenuItem key={hole.number} value={hole.number}>
      {formatHoleNumber(hole.number)}
      </MenuItem>
    )
  
  const formatHoleNumber = (number: number): string =>
    number < 10
      ? '0' + number.toString() // 1 -> 01
      : number.toString()

  return (
    <div>
      Hole {renderHoleSelect()}
    </div>
  )
}

export default HoleSelector