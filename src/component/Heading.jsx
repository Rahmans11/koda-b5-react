import React from 'react'
import { Link } from 'react-router'

export default function Heading() {
  return (
    <header>
        <h1>My App</h1>
        <nav>
            <ul>
                <li>
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
            </ul>
        </nav>
    </header>
  )
}
