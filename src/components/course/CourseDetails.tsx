import React from 'react'
import { useDispatch } from 'react-redux'

import Accordion from '@material-ui/core/Accordion'
import AccordionActions from '@material-ui/core/AccordionActions'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import { createStyles, makeStyles, ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Course } from '../../types'
import { selectCourse } from '../../store/newScoreCard/newScoreCardActions'
import { useSelector } from '../../store/reduxTypes'

/*
  Stupid hack to get rid of warning in Material UI: "findDOMNode is deprecated in StrictMode."
  See https://github.com/mui-org/material-ui/issues/13394.
*/
const theme = unstable_createMuiStrictModeTheme()

const useStyles = makeStyles(() =>
  createStyles({
    details: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  }),
)

const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  const dispatch = useDispatch()
  const selectedCourse: Course = useSelector(state => state.newScoreCard.course)

  const classes = useStyles()
  const { holes, name, par } = course

  // Event handlers for buttons:
  const selectCourseHandler = (event: React.MouseEvent): void => {
    event.stopPropagation()
    dispatch(selectCourse(course))
  }

  const goToCourseInfo = (): void => {
    console.log('Route to course info view')
  }

  // Retrieve player info:
  const getBestScore = (): string => '+12' // TODO

  const getLastPlayed = (): string => '21.07.2020' // TODO

  return (
    <ThemeProvider theme={theme}>
      <Accordion>

        <AccordionSummary id={course.id} expandIcon={<ExpandMoreIcon />}>
          <Button
            color={selectedCourse.id === course.id ? 'primary' : 'default'}
            onClick={event => selectCourseHandler(event)}
            onFocus={event => event.stopPropagation()}
          >
            {name}, {holes.length} väylää
          </Button>
        </AccordionSummary>

        <AccordionDetails className={classes.details}>
          <Chip
            color='primary'
            label={`par ${par}`}
            variant='outlined'
          />
            <p>Personal best {getBestScore()}</p>
            <p>Last played {getLastPlayed()}</p>
        </AccordionDetails>

        <AccordionActions>
          <Button onClick={() => goToCourseInfo()}>
            Course info
          </Button>
        </AccordionActions>

      </Accordion>
    </ThemeProvider>
  )
}
 
export default CourseDetails