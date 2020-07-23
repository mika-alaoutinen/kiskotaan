import React from 'react'

import CourseDetails from '../course/CourseDetails'
import RedirectButton from '../common/RedirectButton'
import { Course } from '../../types'
import { newCoursePath } from '../../constants'
import { useSelector } from '../../store/reduxTypes'

const CourseSelect: React.FC = () => {
  const courses: Course[] = useSelector(state => state.courses)
  
  const renderCourses = () => courses
    ? courses.map(course =>
      <CourseDetails key={course.id} course={course} />)
    : <p>no courses</p>
  
  return (
    <div>
      {renderCourses()}
      <RedirectButton text='Add new course' to={newCoursePath} />
    </div>
  )
}

export default CourseSelect