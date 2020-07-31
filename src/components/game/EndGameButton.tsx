import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import CheckCircle from '@material-ui/icons/CheckCircle'

import ConfirmationDialog from '../common/ConfirmationDialog'
import { homePath } from '../../constants'

const EndGameButton: React.FC = () => {
  const [ open, setOpen ] = useState(false)

  const closeDialog = (): void => {
    setOpen(false)
  } 

  const openDialog = (): void => {
    setOpen(true)
  } 

  return (
    <div>
      <Button
        color='secondary'
        component={Link}
        endIcon={<CheckCircle />}
        onClick={openDialog}
        to={homePath}
        variant='contained'
      >
        End game
      </Button>

      <ConfirmationDialog isOpen={open} closeDialog={closeDialog} />
    </div>
  )
}

export default EndGameButton