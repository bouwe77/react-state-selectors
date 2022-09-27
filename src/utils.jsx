import { useCallback, useState } from 'react'

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
