import { createContext, useCallback, useContext, useState } from 'react'

const CountContext = createContext()

function CountProvider({ children }) {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const increaseCounter1 = useCallback(() => setCounter1((prev) => prev + 3), [])
  const increaseCounter2 = useCallback(() => setCounter2((prev) => prev + 5), [])

  const value = { counter1, increaseCounter1, counter2, increaseCounter2 }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export const useCount = () => {
  const context = useContext(CountContext)
  if (context === undefined) throw new Error('useCount must be used within a CountProvider')
  return context
}

export default CountProvider
