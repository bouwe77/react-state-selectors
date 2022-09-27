import { useCallback, useState } from 'react'

export const Wrapper = ({ children }) => <div className="container">{children}</div>

export const BlinkOnRender = ({ children }) => (
  <div key={Date.now()} className="blink">
    {children}
  </div>
)

export const useRerender = () => {
  const [, setState] = useState({})

  const rerender = useCallback(() => {
    setState({})
  }, [])

  return rerender
}

export const Button = ({ children, onClick }) => (
  <BlinkOnRender>
    <button className="square" onClick={onClick}>
      {children}
    </button>
  </BlinkOnRender>
)
