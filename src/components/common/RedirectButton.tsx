import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const RedirectButton: React.FC<{
  text: string,
  to: string,
  clickHandler?: () => void
}> = ({ text, to, clickHandler }) => (

  <Button
    color='secondary'
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