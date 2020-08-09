import React, { useState, ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Stepper, Step, StepLabel, Typography } from '@material-ui/core'

import CourseSelect from '../components/newGame/CourseSelect'
import NewGameSummary from '../components/newGame/NewGameSummary'
import PlayerSelect from '../components/newGame/PlayerSelect'
import StartGame from '../components/newGame/StartGame'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
)

const NewGameView: React.FC = () => {
  const classes = useStyles()
  const [ activeStep, setActiveStep ] = useState(0)
  const steps = [ 'Select course', 'Add players', 'Summary' ]

  const getStepContent = (step: number): ReactElement|string => {
    switch (step) {
      case 0:
        return <CourseSelect />
      case 1:
        return <PlayerSelect />
      case 2:
        return <NewGameSummary />
      default:
        return 'Unknown step'
    }
  }

  const allStepsDone = (): boolean => activeStep === steps.length

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const renderBackButton = (): JSX.Element =>
    <Button
      className={classes.button}
      disabled={activeStep === 0}
      onClick={handleBack}
    >
      Back
    </Button>

  const renderNextButton = (): JSX.Element =>
    <Button
      className={classes.button}
      color="primary"
      onClick={handleNext}
      variant="contained"
    >
      Next
    </Button>

  const renderStep = (): JSX.Element =>
    <div>
      <Typography className={classes.instructions} component='span'>
        {getStepContent(activeStep)}
      </Typography>

      {renderBackButton()}
      {renderNextButton()}
    </div>
  
  return (
    <div className='new-game'>
      
      <Stepper activeStep={activeStep}>
        {steps.map(label =>
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        )}
      </Stepper>

      {allStepsDone() ? <StartGame /> : renderStep()}
    </div>
  )
}

export default NewGameView