import {useState, useEffect} from 'react'
import ShowFormLogin from '../component/ShowFormLogin'
import Heading from "../component/Heading"
import Footer from "../component/Footer"
// import { useNavigate } from 'react-router';

export default function Login() {
  const [login, setLogin] = useState();
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
