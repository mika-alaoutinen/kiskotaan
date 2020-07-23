import React from 'react'

import CourseDetails from '../course/CourseDetails'
import PlayerDetails from '../player/PlayerDetails'
import { Course, Player } from '../../types'
import { useSelector } from '../../store/reduxTypes'

const NewGameSummary: React.FC = () => {
  const course: Course = useSelector(state => state.newScoreCard.course)
  const players: Player[] = useSelector(state => state.newScoreCard.players)
  
  const renderPlayers = (): JSX.Element[] =>
    players.map(player =>
      <PlayerDetails key={player.id} player={player} />)
  
  return (
    <div>
      <div className='selected-course'>
        <CourseDetails course={course} />
      </div>

      <div className='selected-players'>
        <h3>Players</h3>
        {renderPlayers()}
      </div>
    </div>
  )
}

export default NewGameSummary