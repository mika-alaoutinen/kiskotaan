import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const RedirectButton: React.FC<{
  text: string,
  to: string,
  color?: 'primary' | 'secondary',
  clickHandler?: () => void
}> = ({ text, to, color, clickHandler }) => (

  <Button
    color={color ? color : 'primary'}
    component={Link}
    onClick={clickHandler}
    style={{ color: 'white' }}
    to={to}
    variant='contained'
  >
    {text}
  </Button>
)

export default RedirectButton