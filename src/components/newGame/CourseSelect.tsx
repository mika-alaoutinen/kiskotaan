import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import Courses from '../course/Courses'
import { newCoursePath } from '../../constants'

const CourseSelect: React.FC = () => {
  
  const renderNewCourseButton = () =>
    <Button
      color='secondary'
      component={Link}
      style={{ color: 'white' }}
      to={newCoursePath}
      variant='contained'
    >
      Add new course
    </Button>
  
  return (
    <div>
      <Courses />
      {renderNewCourseButton()}
    </div>
  )
}

export default CourseSelect