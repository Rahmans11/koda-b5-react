import { useState } from 'react'
import "/src/App.css"
import Greeting from "/src/component/Greeting";
import Heading from '../component/Heading';
import Footer from '../component/Footer';

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
      <Heading/>
      <main>
          <div className="text-blue-600">
            <Greeting message="Hi Every one!"/>
          </div>
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
      <Footer/>
    </>
  )
}

export default App
