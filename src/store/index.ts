import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store
