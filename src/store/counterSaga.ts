import { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { increasementSaga, increasementSuccess } from './reducers/counterSlice'

// const log = (action: PayloadAction<unknown>) => {
//   console.log('Log', action)
// }

function* handleIncreasementSuccess(action: PayloadAction<number>) {
  console.log('Wait 1s...')
  // Wait 1s
  yield delay(1000)

  console.log('Wait for dispatch action')

  // Dispatch action
  yield put(increasementSuccess(action.payload || 10))
}

/* eslint-disable require-yield */
export default function* counterSaga() {
  console.log('Counter Saga')

  // yield takeEvery(increasementSaga.toString(), handleIncreasementSuccess)
  yield takeLatest(increasementSaga.toString(), handleIncreasementSuccess)
}
