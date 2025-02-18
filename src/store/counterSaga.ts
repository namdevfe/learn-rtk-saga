import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery } from 'redux-saga/effects'
import { increase } from './reducers/counterSlice'

const log = (action: PayloadAction<unknown>) => {
  console.log('Log', action)
}

/* eslint-disable require-yield */
export default function* counterSaga() {
  console.log('Counter Saga')

  yield takeEvery(increase().type, log)
}
