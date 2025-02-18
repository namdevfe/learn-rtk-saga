import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

interface CounterState {
  value: number
  loading: boolean
}

const initialState: CounterState = {
  value: 0,
  loading: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
      state.value += 1
    },
    decrease(state) {
      state.value -= 1
    },
    increaseByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    increasementSaga(state, action: PayloadAction<number>) {
      state.loading = true
    },
    increasementSuccess(state, action: PayloadAction<number>) {
      state.value += action.payload
      state.loading = false
    }
  }
})

const { actions, reducer: counterReducer } = counterSlice
export const {
  increase,
  decrease,
  increaseByAmount,
  increasementSaga,
  increasementSuccess
} = actions
export const selectCount = (state: RootState) => state.counter.value
export const selectCountLoading = (state: RootState) => state.counter.loading

export default counterReducer
