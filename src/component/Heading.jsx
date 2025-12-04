import React from 'react'
import { Link } from 'react-router'

export default function Heading() {
  return (
    <header className="flex justify-between pr-[20px] pl-[20px] pt-[15px] w-screen bg-blue-300 h-15">
      <h1 className="pb-[10px] text-xl font-semibold" id="header-name">My App</h1>
            <nav className="w-[50%] text-[15px]">
              <ul className="grid grid-cols-6">
                  <li className=''>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/App"}>App Counter</Link>
                  </li>
                  <li>
                    <Link to={"/ProductForm"}>Product Form</Link>
                  </li>
                  <li>
                    <Link to={"/GetRickAndMorty"}>Rick & Morty</Link>
                  </li>
                  <li>
                    <Link to={"/Review"}>Review App</Link>
                  </li>
                  <li>
                    <Link to={"/Login"}>Login</Link>
                  </li>
              </ul>
          </nav>
    </header>
  )
}
