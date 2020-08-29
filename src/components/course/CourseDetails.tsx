import React from 'react'

import { Course } from '../../types'
import { calculatePar } from './courseUtils'
import { useSelector } from '../../store/reduxTypes'

const CourseDetails: React.FC = () => {
  const course: Course = useSelector(state => state.newScoreCard.course)
  const { holes, name } = course

  const getLastPlayed = (): string => '21.07.2020' // TODO

  return (
    <div>
      <h3>{name} {holes.length}</h3>
      <p>- PAR {calculatePar(course)} -</p>
      <p>Last played {getLastPlayed()}</p>
    </div>
  )
}

export default CourseDetails