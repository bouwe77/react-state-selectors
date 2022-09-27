import { useState, useEffect } from 'react';
import './App.css';
import { BlinkOnRender, useRerender } from './utils';

function App() {
  const rerender = useRerender();

  return (
    <BlinkOnRender>
      <button onClick={rerender}>Rerender</button>

      <Counter />

      <Counter />
    </BlinkOnRender>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <BlinkOnRender>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </BlinkOnRender>
  );
};

export default App;
