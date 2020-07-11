import axios from 'axios'
import { coursesUrl } from '../constants'
import { Course } from '../types'

const getCourses = async (): Promise<Course[]|void> =>
  axios.get<Course[]>(coursesUrl)
    .then(response => response.data)
    .catch(error => console.log(error))

export default { getCourses }