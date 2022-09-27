import { useState, useEffect } from 'react'
import './App.css'
import { BlinkOnRender, useRerender } from './utils'

function App() {
  const rerender = useRerender()

  return (
    <BlinkOnRender>
      <Counter1 />

      <Counter2 />
    </BlinkOnRender>
  )
}

const Counter1 = () => {
  const [count, setCount] = useState(0)

  return <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>
}

const Counter2 = () => {
  const [count, setCount] = useState(0)

  return <Button onClick={() => setCount((c) => c + 2)}>{count}</Button>
}

const Button = ({ children, onClick }) => (
  <BlinkOnRender>
    <button className="square" onClick={onClick}>
      {children}
    </button>
  </BlinkOnRender>
)

export default App
