import React from 'react'
import { useDispatch } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'

import { Hole } from '../../types'
import { switchHole } from '../../store/game/gameActions'
import { useSelector } from '../../store/reduxTypes'

/*
  Stupid hack to get rid of warning in Material UI: "findDOMNode is deprecated in StrictMode."
  See https://github.com/mui-org/material-ui/issues/13394.
*/
const theme = unstable_createMuiStrictModeTheme()

const HoleSelector: React.FC = () => {
  const dispatch = useDispatch()

  const { hole, scoreCard } = useSelector(state => state.game)
  const holes: Hole[] = scoreCard.course.holes

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
    <ThemeProvider theme={theme}>
      Hole {renderHoleSelect()}
    </ThemeProvider>
  )
}

export default HoleSelector