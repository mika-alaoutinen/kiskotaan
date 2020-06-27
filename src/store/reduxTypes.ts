import { Action } from 'redux'
import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>