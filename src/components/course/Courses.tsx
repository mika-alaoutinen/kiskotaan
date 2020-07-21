import React from 'react'

import CourseDetails from './CourseDetails'
import { Course } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const Courses: React.FC = () => {
  const courses: Course[] = useSelector(state => state.courses)
  
  const renderCourses = () => courses
    ? courses.map(course =>
      <CourseDetails key={course.id} course={course} />)
    : <p>no courses</p>
  
  return (
    <div>
      {renderCourses()}
    </div>
  )
}

export default Courses