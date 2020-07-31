import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'

import { endGame } from '../../store/game/gameActions'
import { homePath } from '../../constants'

/*
  Stupid hack to get rid of warning in Material UI: "findDOMNode is deprecated in StrictMode."
  See https://github.com/mui-org/material-ui/issues/13394.
*/
const theme = unstable_createMuiStrictModeTheme()

const EndGameButton: React.FC = () => {
  const dispatch = useDispatch()
  const [ open, setOpen ] = useState(false)

  const closeDialog = (): void => {
    setOpen(false)
  } 

  const openDialog = (): void => {
    setOpen(true)
  } 

  const handleClose = (): void => {
    closeDialog()
  }

  const handleConfirm = (): void => {
    dispatch(endGame())
    closeDialog()
  }

  const handleCancel = (): void => {
    setOpen(false)
    closeDialog()
  }

  return (
    <ThemeProvider theme={theme}>
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

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          Are you sure you want to end the game?
        </DialogTitle>

        <div className='dialogButtons' style={{ textAlign: 'right' }}>
          <Button
            color='primary'
            id='confirm'
            onClick={handleConfirm}
          >
            OK
          </Button>
          
          <Button
            color='secondary'
            id='cancel'
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </Dialog>
    </ThemeProvider>
  )
}

export default EndGameButton