import React from 'react'
import { Outlet, Route } from 'react-router'

export default function AppRouter() {
    
    function Header(){
            return(
                <header>Header</header>
            )
        }

    function Footer(){
            return(
                <footer>footer</footer>
            )
        }

    function SideBar(){
            return(
                <aside>sideBar</aside>
            )
        }

    function AuthLayout(){
        return(
            <>
            {Outlet}
            {Footer}
            </>
        )
    }

    function ProductLayout(){
        return(
            <>
            {Header}
            {Outlet}
            {Footer}
            </>
        )
    }

    function UserLayout(){
        return(
            <>
            {Header}
            <section className='grid grid-cols-[3fr_7fr]'>
                {SideBar}
                {Outlet}
            </section>
            {Footer}
            </>
        )
    }

    function Home(){
        return(
            <main>
                Home
            </main>
        )
    }

    function Login(){
        return(
            <main>
                Login
            </main>
        )
    }

  return (
    <Routes>
        <Route path='/app/v1'/>
        <Route index element={ProductLayout}>
        <Route element={Home}/>
        
        <Route path='/auth/'/>
        <Route index element={AuthLayout}></Route>
        <Route element={Login}/>
        <Route path='/user/'/>
        <Route index element={UserLayout}></Route>

        <Route path='/products/'/>
        <Route index element={ProductLayout}></Route>
        </Route>
        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
