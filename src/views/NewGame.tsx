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
import StartGame from '../components/newGame/StartGame'
import { gameLoading, gamePath } from '../constants'
import { useSelector } from '../store/reduxTypes'

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
  const scoreCardId: string = useSelector(state => state.scoreCard.id)
  const classes = useStyles()

  const [activeStep, setActiveStep] = useState(0)
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

  // Utility functions:
  const allStepsDone = (): boolean => activeStep === steps.length
  const onLastStep = (): boolean => activeStep === steps.length -1

  const createNextButton = (clickHandler: () => void) =>
    <Button
      variant="contained"
      color="primary"
      onClick={clickHandler}
      className={classes.button}
    >
      Next
    </Button>
  
  // Click handlers for buttons:
  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleLastStep = (): void => {
    dispatch(createNewScoreCard())
    handleNext()
  }

  // Rendering buttons:
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
      ? createNextButton(handleLastStep)
      : createNextButton(handleNext)

  const renderStartButton = (): JSX.Element =>
    <RedirectButton text='Start game' to={`${gamePath}/${scoreCardId}`} />

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

      {allStepsDone() ? renderStartButton() : renderStep()}
    </div>
  )
}

export default NewGame