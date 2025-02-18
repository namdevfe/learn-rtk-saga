import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import {
  decrease,
  increase,
  increaseByAmount,
  increasementSaga,
  selectCount,
  selectCountLoading
} from './store/reducers/counterSlice'
import cityService from './services/cityService'

function App() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectCount)
  const loading = useAppSelector(selectCountLoading)

  console.log('🚀loading---->', loading)

  useEffect(() => {
    ;(async () => {
      const res = await cityService.getAll()
      console.log('🚀res---->', res.data)
    })()
  }, [])

  return (
    <main>
      <div>{value}</div>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increaseByAmount(10))}>
        Increase By Amount
      </button>

      <button onClick={() => dispatch(increasementSaga(20))}>
        Increase Async
      </button>
    </main>
  )
}

export default App
