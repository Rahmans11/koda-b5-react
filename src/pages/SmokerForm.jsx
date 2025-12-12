import React from 'react'
import AddSmokerForm from '../component/AddSmokerForm'
import ShowSmokerForm from '../component/ShowSmokerForm'
import Heading from '../component/Heading'
import Footer from '../component/Footer'

export default function SmokerForm() {
  return (
    <>
    <Heading/>
    <main className='h-screen min-h-fit flex flex-col gap-15'>
        <AddSmokerForm/>
        <ShowSmokerForm/>
    </main>
    <Footer/>
    </>
  )
}
