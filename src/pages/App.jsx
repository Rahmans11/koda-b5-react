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
      <main className='w-[100%] h-[100vh] flex flex-col justify-center gap-15'>
        <Greeting message="Lets Count!"/>
        <div className="card font-semibold text-3xl">
          <p className='mb-10'>Count : {count}</p>
          <div className='flex justify-center gap-20'>
            <button className='w-[7%] h-[60px] bg-blue-400'
         onClick={ handleIncrement}>
          +
        </button>
        <button className='w-[7%] h-[60px] bg-blue-400' 
         onClick={ handleDecrement}>
          -
        </button>
          </div>
      </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
