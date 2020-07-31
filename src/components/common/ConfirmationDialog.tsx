import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'

import RedirectButton from './RedirectButton'
import { endGame } from '../../store/game/gameActions'
import { homePath } from '../../constants'

/*
  Stupid hack to get rid of warning in Material UI: "findDOMNode is deprecated in StrictMode."
  See https://github.com/mui-org/material-ui/issues/13394.
*/
const theme = unstable_createMuiStrictModeTheme()

const style = {
  marginRight: '1em' as const,
  marginBottom: '1em' as const,
  textAlign: 'end' as const
}

const ConfirmationDialog: React.FC<{
  isOpen: boolean, closeDialog: () => void
}> = ({ isOpen, closeDialog }) => {

  const dispatch = useDispatch()

  const handleConfirm = (): void => {
    dispatch(endGame())
    closeDialog()
  }

  const handleCancel = (): void => {
    closeDialog()
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog onClose={closeDialog} open={isOpen}>
        <DialogTitle>
          Are you sure you want to end the game?
        </DialogTitle>

        <div className='dialogButtons' style={style}>
          <Button
            color='secondary'
            id='cancel'
            onClick={handleCancel}
            style={{ marginRight: '5px' }}
            variant='contained'
          >
            Cancel
          </Button>

          <RedirectButton
            text='OK'
            to={homePath}
            clickHandler={handleConfirm}
          />
        </div>

      </Dialog>
    </ThemeProvider>
  )
}

export default ConfirmationDialog