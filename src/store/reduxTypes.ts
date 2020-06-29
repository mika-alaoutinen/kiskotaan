import { Action } from 'redux'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { ThunkAction } from 'redux-thunk'

import { reducer } from './store'

// A generic Thunk action type:
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Custom typed useSelector for react-redux:
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

// Private types
type RootState = ReturnType<typeof reducer>