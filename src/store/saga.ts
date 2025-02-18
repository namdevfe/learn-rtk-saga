/* eslint-disable require-yield */

import { all } from 'redux-saga/effects'
import counterSaga from './counterSaga'

function* helloSaga() {
  console.log('Hello Saga')
}

function* rootSaga() {
  console.log('Root Saga')
  yield all([helloSaga(), counterSaga()])
}

export default rootSaga
