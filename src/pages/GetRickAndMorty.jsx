import { useState, useEffect } from "react";

import ShowCharacters from "../component/ShowCharacters";
import FilterCharacters from "../component/FilterCharacters";
import SearchCharacter from "../component/SearchCharacter";

function GetRickAndMorty(queryParams) {
    const [characterList,  setCharacterList] = useState([]); 
    
    useEffect(()=>{
        (async () =>{
            const url = "https://rickandmortyapi.com/api/character?"
            let query = new URLSearchParams(queryParams).toString();
            try{
                const response = await fetch(url+query);
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
    },[])


    return(
        <>
            <header>
                <h1 className="text-center text-orange-600">
                    Rick And Morty Character
                </h1>
            </header>
            <main>
                <SearchCharacter/>
                <FilterCharacters/>
                <ShowCharacters characterList = {characterList}/>
            </main>
        </>
    )
}

export default GetRickAndMorty;