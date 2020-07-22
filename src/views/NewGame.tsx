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

  const allStepsDone = (): boolean => activeStep === steps.length
  
  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = (): void => {
    setActiveStep(0)
  }
  
  const renderBackButton = () =>
    <Button
      disabled={activeStep === 0}
      onClick={handleBack}
      className={classes.button}
      >
      Back
    </Button>

  const renderNextButton = () =>
    <Button
      variant="contained"
      color="primary"
      onClick={handleNext}
      className={classes.button}
    >
      {activeStep === steps.length - 1 ? 'Start game' : 'Next'}
    </Button>

  const startGame = () => {
    dispatch(createNewScoreCard())
    // TODO: redirect to score card view

    return (<div>
      <Typography className={classes.instructions}>
        All steps completed
      </Typography>
      <Button onClick={handleReset} className={classes.button}>
        Reset
      </Button>
    </div>)
  }
  
  const renderStep = () =>
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

      <div>
        {allStepsDone() ? startGame() : renderStep()}
      </div>
    </div>
  )
}

export default NewGame