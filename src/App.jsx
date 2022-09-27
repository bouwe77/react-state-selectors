import { useState, useEffect } from 'react'
import './App.css'
import CountProvider, { useCount } from './CounterContext'
import { BlinkOnRender, Button, useRerender } from './utils'

function App() {
  const rerender = useRerender()

  return (
    <CountProvider>
      <BlinkOnRender>
        <Counter1 />

        <Counter2 />
      </BlinkOnRender>
    </CountProvider>
  )
}

const Counter1 = () => {
  const { counter1, increaseCounter1 } = useCount()

  return <Button onClick={increaseCounter1}>{counter1}</Button>
}

const Counter2 = () => {
  const { counter2, increaseCounter2 } = useCount()

  return <Button onClick={increaseCounter2}>{counter2}</Button>
}

export default App
