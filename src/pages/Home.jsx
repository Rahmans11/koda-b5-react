import React from 'react'
import Heading from '../component/Heading'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <>
    <Heading/>
    <main className='h-screen w-screen'>
       <h2 className='pt-20 text-3xl font-semibold mb-10'>
        Well Come Every One!
        </h2>
        <div className='flex justify-center'>
          <img src="https://i.pinimg.com/originals/e0/ee/4a/e0ee4ac1808fb03a38c3d88dca2a5dbf.gif" alt="hi gift" /> 
        </div>
    </main>
    <Footer/>
    </>
  )
}
