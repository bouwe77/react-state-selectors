const CountContext = React.createContext()

function CountProvider({ children }) {
  const [counter1, setCounter1] = React.useState(0)
  const [counter2, setCounter2] = React.useState(0)

  const increaseCounter1 = React.useCallback(() => setCounter1((prev) => prev + 1), [])
  const increaseCounter2 = React.useCallback(() => setCounter2((prev) => prev + 2), [])

  const value = { counter1, increaseCounter1, counter2, increaseCounter2 }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) throw new Error('useCount must be used within a CountProvider')
  return context
}
