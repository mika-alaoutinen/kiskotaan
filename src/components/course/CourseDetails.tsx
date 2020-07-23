import React from 'react'

import { Course } from '../../types'

const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  const { holes, name, par } = course

  const getLastPlayed = (): string => '21.07.2020' // TODO

  return (
    <div>
      <h3>{name} {holes.length}</h3>
      <p>- PAR {par} -</p>
      <p>Last played {getLastPlayed()}</p>
    </div>
  )
}

export default CourseDetails