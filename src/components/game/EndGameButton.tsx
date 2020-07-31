import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import CheckCircle from '@material-ui/icons/CheckCircle'

import ConfirmationDialog from '../common/ConfirmationDialog'

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
        endIcon={<CheckCircle />}
        onClick={openDialog}
        variant='contained'
      >
        End game
      </Button>

      <ConfirmationDialog isOpen={open} closeDialog={closeDialog} />
    </div>
  )
}

export default EndGameButton