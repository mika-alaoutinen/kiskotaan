import React, { useState, ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { createNewScoreCard } from '../store/scoreCard/scoreCardActions'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import CourseSelect from '../components/newGame/CourseSelect'
import NewGameSummary from '../components/newGame/NewGameSummary'
import PlayerSelect from '../components/newGame/PlayerSelect'
import RedirectButton from '../components/common/RedirectButton'
import { gamePath } from '../constants'

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

const NewGame: React.FC = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = [ 'Select course', 'Add players', 'Start game' ]

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

  const onLastStep = (): boolean => activeStep === steps.length - 1
  
  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const renderBackButton = (): JSX.Element =>
    <Button
      disabled={activeStep === 0}
      onClick={handleBack}
      className={classes.button}
      >
      Back
    </Button>

  const renderNextButton = (): JSX.Element =>
    onLastStep()
      ? <RedirectButton
        text='Start game'
        to={gamePath}
        clickHandler={() => dispatch(createNewScoreCard())}
      />
      : <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
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

      {renderStep()}
    </div>
  )
}

export default NewGame