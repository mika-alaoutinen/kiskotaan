import { ADD_COURSE, GET_COURSES, CourseAction, CourseState } from './courseTypes'

const courseReducer = (state: CourseState = [], action: CourseAction): CourseState => {
  switch (action.type) {

    case ADD_COURSE:
      return [ ...state, action.course ]

    case GET_COURSES:
      return action.courses
      
    default:
      return state
  }
}

export default courseReducer