import { Course } from '../../types'

export const calculatePar = (course: Course): number =>
  course.holes
    .map(hole => hole.par)
    .reduce((accumulator, par) => accumulator + par, 0)