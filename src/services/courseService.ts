import axios from 'axios'
import { coursesUrl } from '../constants'
import { Course } from '../types'

const getCourses = async (): Promise<Course[]|void> =>
  axios.get<Course[]>(coursesUrl)
    .then(response => response.data)
    .catch(error => console.log(error))

const addCourse = async (course: Course): Promise<Course|void> =>
  axios.post<Course>(coursesUrl, course)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getCourses, addCourse }