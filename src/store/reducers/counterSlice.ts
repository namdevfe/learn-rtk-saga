import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
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
    }
  }
})

const { actions, reducer: counterReducer } = counterSlice
export const { increase, decrease, increaseByAmount } = actions
export const selectCount = (state: RootState) => state.counter.value

export default counterReducer
