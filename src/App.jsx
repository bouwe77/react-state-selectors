import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BlinkOnRender>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </BlinkOnRender>
  );
}

const BlinkOnRender = ({ children }) => (
  <div key={Date.now()} className="blink">
    {children}
  </div>
);

export default App;
