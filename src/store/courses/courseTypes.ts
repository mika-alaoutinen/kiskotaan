import { Course } from '../../types'

// Action names:
export const ADD_COURSE = 'ADD_COURSE'
export const GET_COURSES = 'GET_COURSES'

// Types for state and actions:
export type CourseState = Course[]
export type CourseAction = AddCourseAction | GetCoursesAction

// Private type definitions:
interface AddCourseAction {
  type: typeof ADD_COURSE,
  course: Course
}

interface GetCoursesAction {
  type: typeof GET_COURSES,
  courses: Course[]
}