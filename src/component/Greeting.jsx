import React from 'react';

function Greeting(props) {
  return <>
      <h1 className='text-blue-500 font-extrabold text-4xl'
      >Well Come To My Counter Number</h1>
      <p className='text-blue-500 font-semibold text-3xl'
      >{props.message}</p>
    </>
}
export default Greeting;