import { useState, useEffect } from "react";

import Heading from "../component/Heading";
import Footer from "../component/Footer";
import ShowCustomFetch from "../component/ShowCustomFetch";
import useFetch from "../customHooks/useFetch";

function FetchCustom() {
    
    const url = "https://jsonplaceholder.typicode.com/users";
    const {setUrl} = useFetch(url);
    const data = useFetch(url);
    const letFetch = () =>{
       setUrl("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    }
    return(
        <>
            <Heading/>
            <main>
                <h2 className="text-center text-3xl font-extrabold text-blue-600 m-[20px_20px]">
                    Fetch Custom Hooks
                </h2>
                <button onClick={letFetch} className="bg-blue-500"
                type="button">Let Fetch</button>
                <ShowCustomFetch/>
            </main>
            <Footer/>
        </>
    )
}

export default FetchCustom;