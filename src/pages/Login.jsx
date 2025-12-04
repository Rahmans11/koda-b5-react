import {useState} from 'react'
import ShowFormLogin from '../component/ShowFormLogin'
import Heading from "../component/Heading"
import Footer from "../component/Footer"

export default function Login() {
  const [login, setLogin] = useState([]);
  return (
    <>
    <Heading/>
    <main className='w-screen h-screen flex justify-center p-10'>
      <ShowFormLogin setLogin={setLogin}/>
    </main>
    <Footer/>
    </>
  )
}
