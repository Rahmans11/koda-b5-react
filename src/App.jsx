import { useState } from 'react'
import './App.css'
import Greeting from '../component/Greeting';

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount); 
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setCount((prevCount) => prevCount); 
    }
  };

  return (
    <>
      <header className="text-blue-600">
        <Greeting message="Hi Every one!"/>
      </header>
      <main>
        <div className="card">
          <p>Count : {count}</p>
        <button onClick={ handleIncrement}>
          +
        </button>
        <button onClick={ handleDecrement}>
          -
        </button>
      </div>
      </main>
      <footer>
        Thank You!
      </footer>
    </>
  )
}

export default App
