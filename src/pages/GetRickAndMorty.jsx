import { useState, useEffect } from "react";

import Heading from "../component/Heading";
import Footer from "../component/Footer";
import ShowCharacters from "../component/ShowCharacters";
import FilterCharacters from "../component/FilterCharacters";

function GetRickAndMorty() {
    const [inputQuery, setQuery] = useState('');
    const [characterList,  setCharacterList] = useState([]); 
    const handleInputQuery = (input) =>{
        setQuery(input);
    }
    useEffect(()=>{
        (async () =>{
            const url = "https://rickandmortyapi.com/api/character/?"
            try{
                const response = await fetch(url + inputQuery);
                // console.log("ini url yg dipakek :"+ url + inputQuery)
                if(!response.ok){
                    throw new Error(`${response.status}: ${response.statusText}`)
                }
                const data = await response.json();
                const characters = data.results;
                
                const newCharacterList = characters.slice(0, 12).map((item)=>{
                    return{
                        name: item.name,
                        status: item.status,
                        species: item.species,
                        type: item.type,
                        gender: item.gender,
                        image: item.image
                    }
                })
                setCharacterList(newCharacterList);
            }catch(error){
                console.error(error)
            }
        })()
    },[inputQuery])


    return(
        <>
            <Heading/>
            <main>
                <h2 className="text-center text-3xl font-extrabold text-blue-600 m-[20px_20px]">
                    Rick And Morty Character
                </h2>
                <FilterCharacters inputFilter = {handleInputQuery}/>
                <ShowCharacters characterList = {characterList}/>
            </main>
            <Footer/>
        </>
    )
}

export default GetRickAndMorty;