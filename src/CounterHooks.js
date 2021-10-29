import { useState, useContext } from 'react';
import { ThemeContext } from './App';

export default function CounterHooks({ initialCount }) {
  //with hooks we can manipulate state without an object
  //but they must be always on top of the function
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}
