import { useState, useEffect } from 'react'
import './App.css'
import CountProvider, { useCount } from './CounterContext'
import { BlinkOnRender, Button, useRerender, Wrapper } from './utils'

function App() {
  const rerender = useRerender()

  return (
    <Wrapper>
      <CountProvider>
        <BlinkOnRender>
          <Counter1 />
          <div>Hello World</div>
          <Counter2 />
        </BlinkOnRender>
      </CountProvider>
    </Wrapper>
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
