import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import CourseDetails from '../course/CourseDetails'
import { Course } from '../../types'
import { newCoursePath } from '../../constants'
import { useSelector } from '../../store/reduxTypes'

const CourseSelect: React.FC = () => {
  const courses: Course[] = useSelector(state => state.courses)
  
  const renderCourses = () => courses
    ? courses.map(course =>
      <CourseDetails key={course.id} course={course} />)
    : <p>no courses</p>
  
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
      {renderCourses()}
      {renderNewCourseButton()}
    </div>
  )
}

export default CourseSelect