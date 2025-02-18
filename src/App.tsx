import { useAppDispatch, useAppSelector } from './store'
import {
  decrease,
  increase,
  increaseByAmount,
  selectCount
} from './store/reducers/counterSlice'

function App() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectCount)

  return (
    <main>
      <div>{value}</div>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increaseByAmount(10))}>
        Increase By Amount
      </button>
    </main>
  )
}

export default App
