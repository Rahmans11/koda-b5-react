import {useState} from 'react'
import ShowFormLogin from '../component/ShowFormLogin'
import Heading from "../component/Heading"
import Footer from "../component/Footer"

export default function Login() {
  const [login, setLogin] = useState([]);
  return (
    <>
    <Heading/>
    <ShowFormLogin setLogin={setLogin}/>
    <Footer/>
    </>
  )
}
