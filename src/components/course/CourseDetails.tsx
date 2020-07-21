import React from 'react'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { unstable_createMuiStrictModeTheme, ThemeProvider  } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Course } from '../../types'

/*
  Stupid hack to get rid of warning in Material UI: "findDOMNode is deprecated in StrictMode."
  See https://github.com/mui-org/material-ui/issues/13394.
*/
const theme = unstable_createMuiStrictModeTheme()

const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  const { name, par } = course

  return (
    <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionSummary id={course.id} expandIcon={<ExpandMoreIcon />}>
          Course name {name}
        </AccordionSummary>

        <AccordionDetails>
          <p>Holes...</p>
          <p>Par: {par}</p>
        </AccordionDetails>

      </Accordion>
    </ThemeProvider>
  )
}
 
export default CourseDetails