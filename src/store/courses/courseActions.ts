import { AppThunk } from '../reduxTypes'
import { ADD_COURSE, GET_COURSES } from './courseTypes'
import { Course } from '../../types'
import courseService from '../../services/courseService'

export const addCourse = (course: Course): AppThunk => async dispatch => {
  const newCourse: Course|void = await courseService.addCourse(course)

  if (!newCourse) {
    return
  }

  dispatch({
    type: ADD_COURSE,
    course: newCourse
  })
}

export const getCourses = (): AppThunk => async dispatch => {
  const courses: Course[]|void = await courseService.getCourses()

  if (!courses) {
    return
  }

  dispatch({
    type: GET_COURSES,
    courses
  })
}