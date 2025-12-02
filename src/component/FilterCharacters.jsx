import React from 'react'
import GetRickAndMorty from '../pages/GetRickAndMorty'

export default function FilterCharacters(props) {
    const {characterList} = props
    const speciesDropDown = () =>{
        const species = characterList;
        GetRickAndMorty({species})
    }

  return (
            <div>
                <label htmlFor="select-species">Select Species: </label>
                <select onChange={speciesDropDown}
                id="select-species" name="select_species">
                    <option value="0" disabled defaultValue={"0"}>Choose Species to Filter</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                </select>
            </div>
  )
}
