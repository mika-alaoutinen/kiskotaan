import React from 'react'
import { Course } from '../../types'

const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  const { name, par } = course
  
  return (
    <div>
      <p>Course name: {name}</p>
      <p>Holes...</p>
      <p>Par: {par}</p>
    </div>
  )
}
 
export default CourseDetails